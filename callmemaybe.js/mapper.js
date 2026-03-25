export const map = (arr, func) => {
  const result = [];
  // On parcourt le tableau original
  for (let i = 0; i < arr.length; i++) {
    // On applique la fonction et on stocke le résultat dans un nouveau tableau
    result.push(func(arr[i], i, arr));
  }
  return result;
};

export const flatMap = (arr, func) => {
  const result = [];
  // Étape 1 : On applique la fonction de rappel (similaire à map)
  const mapped = map(arr, func);
  
  // Étape 2 : On aplatit le résultat d'un seul niveau (comportement de flatMap)
  for (let i = 0; i < mapped.length; i++) {
    if (Array.isArray(mapped[i])) {
      // Si l'élément est un tableau, on ajoute ses éléments individuellement
      for (let j = 0; j < mapped[i].length; j++) {
        result.push(mapped[i][j]);
      }
    } else {
      // Sinon, on ajoute l'élément tel quel
      result.push(mapped[i]);
    }
  }
  return result;
};