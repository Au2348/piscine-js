export const currify = (fn) => {
  // On retourne une nouvelle fonction récursive
  return function curried(...args) {
    // Si le nombre d'arguments reçus est supérieur ou égal 
    // à l'arité de la fonction originale (fn.length)
    if (args.length >= fn.length) {
      return fn.apply(this, args); // On exécute la fonction
    } else {
      // Sinon, on retourne une fonction qui attend les arguments restants
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
};