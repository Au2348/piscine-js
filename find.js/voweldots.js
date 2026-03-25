// La variable vowels contient la RegEx pour identifier les voyelles (a, e, i, o, u)
// On utilise le flag 'g' pour toutes les trouver et 'i' pour ignorer la casse
export const vowels = /[aeiou]/gi;[cite: 11]

export const vowelDots = (str) => {
  // On utilise replace pour ajouter un point après chaque voyelle trouvée
  // '$&' représente le caractère qui a matché (la voyelle elle-même)
  return str.replace(vowels, '$&.');[cite: 11]
};