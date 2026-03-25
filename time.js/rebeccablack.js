export const isFriday = (date) => {
  // getDay() retourne 5 pour vendredi
  return date.getDay() === 5;[cite: 18]
};

export const isWeekend = (date) => {
  // getDay() retourne 6 pour samedi et 0 pour dimanche
  const day = date.getDay();[cite: 18]
  return day === 6 || day === 0;[cite: 18]
};

export const isLeapYear = (date) => {
  const year = date.getFullYear();[cite: 18]
  // Une année est bissextile si elle est divisible par 4 mais pas par 100, 
  // ou si elle est divisible par 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);[cite: 18]
};

export const isLastDayOfMonth = (date) => {
  const nextDay = new Date(date);[cite: 18]
  // On ajoute un jour à la date actuelle[cite: 18]
  nextDay.setDate(date.getDate() + 1);[cite: 18]
  // Si le jour de la nouvelle date est le 1er, c'est que la date initiale 
  // était le dernier jour du mois[cite: 18]
  return nextDay.getDate() === 1;[cite: 18]
};