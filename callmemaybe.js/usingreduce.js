// Calcule la somme de tous les nombres du tableau
export const adder = (arr, initialValue = 0) => {
  return arr.reduce((acc, current) => acc + current, initialValue);
};

// Additionne ou multiplie selon que l'élément est pair ou impair
// Pair = multiplier, Impair = additionner
export const sumOrMul = (arr, initialValue = 0) => {
  return arr.reduce((acc, current) => {
    if (current % 2 === 0) {
      return acc * current;
    } else {
      return acc + current;
    }
  }, initialValue);
};

// Exécute une série de fonctions en utilisant le résultat de l'une comme entrée pour la suivante
export const funcExec = (funcs, initialValue) => {
  return funcs.reduce((acc, fn) => fn(acc), initialValue);
};