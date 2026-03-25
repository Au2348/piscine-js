// Retourne les chaînes de moins de 7 caractères
export const filterShortStateName = (arr) => {
  return arr.filter((word) => word.length < 7);[cite: 19]
};

// Retourne les chaînes commençant par une voyelle (a, e, i, o, u)
export const filterStartVowel = (arr) => {
  return arr.filter((word) => /^[aeiou]/i.test(word));[cite: 19]
};

// Retourne les chaînes contenant au moins 5 voyelles
export const filter5Vowels = (arr) => {
  return arr.filter((word) => {
    const matches = word.match(/[aeiou]/gi);[cite: 19]
    return matches !== null && matches.length >= 5;[cite: 19]
  });
};

// Retourne les chaînes contenant une seule voyelle distincte
// Exemple : "Alabama" -> seulement la voyelle "a"[cite: 19]
export const filter1DistinctVowel = (arr) => {
  return arr.filter((word) => {
    const vowels = word.toLowerCase().match(/[aeiou]/g);[cite: 19]
    if (!vowels) return false;[cite: 19]
    // Un Set ne garde que les valeurs uniques[cite: 19]
    const uniqueVowels = new Set(vowels);[cite: 19]
    return uniqueVowels.size === 1;[cite: 19]
  });
};

// Filtre un tableau d'objets selon 4 critères cumulatifs[cite: 19]
export const multiFilter = (arr) => {
  return arr.filter((obj) => {
    // 1. La capitale a au moins 8 caractères[cite: 19]
    const cond1 = obj.capital.length >= 8;[cite: 19]
    // 2. Le nom ne commence PAS par une voyelle[cite: 19]
    const cond2 = !/^[aeiou]/i.test(obj.name);[cite: 19]
    // 3. Le tag possède au moins une voyelle[cite: 19]
    const cond3 = /[aeiou]/i.test(obj.tag);[cite: 19]
    // 4. La région n'est pas "South"[cite: 19]
    const cond4 = obj.region !== 'South';[cite: 19]

    return cond1 && cond2 && cond3 && cond4;[cite: 19]
  });
};