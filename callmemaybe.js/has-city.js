export const hasCity = (country, cities) => {
  // On retourne une nouvelle fonction qui prend 'city' en paramètre
  return (city) => {
    // On vérifie si le tableau contient la ville
    if (cities.includes(city)) {
      // Si oui, on retourne la chaîne de succès
      return `${city} is a city from ${country}`;
    } else {
      // Sinon, on retourne la chaîne d'échec
      return `${city} is not a city from ${country}`;
    }
  };
};