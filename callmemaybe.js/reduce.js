export const fold = (arr, func, acc) => {
  // Parcourt de la gauche vers la droite
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

export const foldRight = (arr, func, acc) => {
  // Parcourt de la droite vers la gauche
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

export const reduce = (arr, func) => {
  // Erreur si le tableau est vide
  if (arr.length < 1) throw new Error('Array must contain at least one element');
  
  // L'accumulateur prend la première valeur du tableau
  let acc = arr[0];
  
  // On commence l'itération à l'index 1
  for (let i = 1; i < arr.length; i++) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

export const reduceRight = (arr, func) => {
  if (arr.length < 1) throw new Error('Array must contain at least one element');
  
  // L'accumulateur prend la dernière valeur du tableau
  let acc = arr[arr.length - 1];
  
  // On remonte le tableau à partir de l'avant-dernier élément
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};