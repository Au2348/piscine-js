// Expression régulière de base pour capturer les URLs http et https
const urlRegex = /https?:\/\/[^\s]+/g;

export const getURL = (dataSet) => {
  // Retourne toutes les correspondances ou un tableau vide si aucune
  return dataSet.match(urlRegex) || [];
};

export const greedyQuery = (dataSet) => {
  const urls = getURL(dataSet);
  // On filtre les URLs qui ont au moins 3 paramètres query (séparés par des '&')
  // Un URL avec au moins 3 paramètres contient au moins 2 caractères '&' après le '?'
  return urls.filter((url) => {
    const queryParams = url.split('?')[1];
    if (!queryParams) return false;
    return (queryParams.split('&').length) >= 3;
  });
};

export const notSoGreedy = (dataSet) => {
  const urls = getURL(dataSet);
  // On filtre pour avoir au moins 2 et au plus 3 paramètres
  return urls.filter((url) => {
    const queryParams = url.split('?')[1];
    if (!queryParams) return false;
    const count = queryParams.split('&').length;
    return count >= 2 && count <= 3;
  });
};