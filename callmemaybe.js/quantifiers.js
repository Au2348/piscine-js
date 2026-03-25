export const every = (arr, func) => {
  // On parcourt chaque élément du tableau
  for (let i = 0; i < arr.length; i++) {
    // Si un seul élément ne respecte pas la condition, on retourne false immédiatement
    if (!func(arr[i], i, arr)) {
      return false;
    }
  }
  // Si on a parcouru tout le tableau sans erreur, tout est valide
  return true;
};

export const some = (arr, func) => {
  // On parcourt chaque élément
  for (let i = 0; i < arr.length; i++) {
    // Si au moins un élément respecte la condition, on retourne true immédiatement
    if (func(arr[i], i, arr)) {
      return true;
    }
  }
  // Si on arrive à la fin sans avoir trouvé d'élément valide, on retourne false
  return false;
};

export const none = (arr, func) => {
  // none est l'inverse de some : il renvoie true si aucun élément ne valide la fonction
  return !some(arr, func);
};