// Extrait uniquement le nom des villes d'un tableau d'objets
export const citiesOnly = (arr) => {
  return arr.map((obj) => obj.city);[cite: 19]
};

// Met une majuscule à la première lettre de chaque mot
export const upperCasingStates = (arr) => {
  return arr.map((state) => 
    state
      .split(' ')[cite: 19]
      .map((word) => word[0].toUpperCase() + word.slice(1))[cite: 19]
      .join(' ')[cite: 19]
  );
};

// Convertit les températures Fahrenheit en Celsius et arrondit à l'inférieur
export const fahrenheitToCelsius = (arr) => {
  return arr.map((temp) => {
    // On extrait le nombre de la chaîne (ex: "68°F" -> 68)
    const fahrenheit = parseInt(temp);[cite: 19]
    // Formule : (F - 32) * 5/9
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);[cite: 19]
    return `${celsius}°C`;[cite: 19]
  });
};

// Supprime tous les espaces dans la chaîne de température[cite: 19]
export const trimTemp = (arr) => {
  return arr.map((obj) => ({
    ...obj,[cite: 19]
    temperature: obj.temperature.replace(/\s/g, ''),[cite: 19]
  }));
};

// Formate les données météo en une phrase complète[cite: 19]
export const tempForecasts = (arr) => {
  return arr.map((obj) => {
    const fahrenheit = parseInt(obj.temperature);[cite: 19]
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);[cite: 19]
    // On capitalise l'état en réutilisant la logique d'upperCasingStates[cite: 19]
    const state = obj.state
      .split(' ')[cite: 19]
      .map((word) => word[0].toUpperCase() + word.slice(1))[cite: 19]
      .join(' ');[cite: 19]
    
    return `${celsius}°Celsius in ${obj.city}, ${state}`;[cite: 19]
  });
};