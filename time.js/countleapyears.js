export const countLeapYears = (date) => {
  const year = date.getFullYear() - 1; // On compte jusqu'à l'année précédente

  // Formule mathématique pour compter les années bissextiles :
  // 1. Tous les 4 ans
  // 2. Sauf tous les 100 ans
  // 3. Mais inclus tous les 400 ans
  return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
};