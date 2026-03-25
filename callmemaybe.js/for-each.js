export const forEach = (arr, func) => {
  // On utilise une boucle for classique pour itérer sur le tableau
  for (let i = 0; i < arr.length; i++) {
    // On appelle la fonction fournie avec trois arguments standard :
    // 1. L'élément actuel
    // 2. L'index actuel
    // 3. Le tableau d'origine
    func(arr[i], i, arr);
  }
};