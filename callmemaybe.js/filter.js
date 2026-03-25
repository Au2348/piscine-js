export const filter = (arr, func) => {
  const result = [];
  // On parcourt le tableau et on ajoute l'élément si la fonction de test renvoie true
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

export const reject = (arr, func) => {
  const result = [];
  // Reject est l'inverse de filter : on garde l'élément si la fonction renvoie false
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

export const partition = (arr, func) => {
  // Partition renvoie un tableau contenant deux sous-tableaux : 
  // le premier pour les éléments acceptés, le second pour les rejetés
  return [filter(arr, func), reject(arr, func)];
};