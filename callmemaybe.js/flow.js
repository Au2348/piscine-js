export const flow = (funcs) => {
  // La fonction retournée accepte un nombre indéfini d'arguments
  return (...args) => {
    // On utilise reduce pour passer le résultat d'une fonction à la suivante
    return funcs.reduce((result, fn, index) => {
      // Pour la première fonction, on passe tous les arguments initiaux
      // Pour les suivantes, on passe le résultat de la fonction précédente
      return index === 0 ? fn(...args) : fn(result);
    }, null);
  };
};