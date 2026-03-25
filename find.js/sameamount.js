export const sameAmount = (str, reg1, reg2) => {
  // On s'assure que les expressions régulières ont le flag 'g' (global) 
  // pour trouver TOUTES les occurrences, sinon match() n'en renverra qu'une.
  const r1 = new RegExp(reg1, reg1.flags.includes('g') ? reg1.flags : reg1.flags + 'g');
  const r2 = new RegExp(reg2, reg2.flags.includes('g') ? reg2.flags : reg2.flags + 'g');

  const match1 = str.match(r1);
  const match2 = str.match(r2);

  // On compare les longueurs des tableaux de résultats. 
  // Si match() ne trouve rien, il renvoie null, d'où l'utilisation de || [].
  return (match1 || []).length === (match2 || []).length;
};