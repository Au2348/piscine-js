export const ionOut = (str) => {
  // La RegEx cherche des mots finissant par 'tion'
  // (\w+t) capture la première partie du mot se terminant par 't'
  // (?=ion) est un "positive lookahead" qui vérifie la présence de 'ion' sans l'inclure dans le match
  const regex = /(\w+t)ion\b/g;[cite: 6]
  
  const matches = str.match(regex) || [];[cite: 6]
  
  // On nettoie chaque correspondance pour enlever la partie 'ion'
  return matches.map(word => word.replace(/ion/, ''));[cite: 6]
};