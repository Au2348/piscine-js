// Vérifie si CHAQUE élément fait au moins 5 caractères
export const longWords = (arr) => {
  return arr.every((word) => typeof word === 'string' && word.length >= 5);[cite: 25]
};

// Vérifie si AU MOINS UN élément fait 10 caractères ou plus
export const oneLongWord = (arr) => {
  return arr.some((word) => typeof word === 'string' && word.length >= 10);[cite: 25]
};

// Vérifie qu'AUCUN élément ne fait 7 caractères ou plus
export const noLongWords = (arr) => {
  // every renvoie true si aucun ne dépasse ou égale 7
  return arr.every((word) => typeof word === 'string' && word.length < 7);[cite: 25]
};