export const dayOfTheYear = (date) => {
  // On crée une nouvelle date correspondant au 1er janvier de la même année
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  
  // Calcul de la différence en millisecondes
  const diffInMs = date.getTime() - firstDayOfYear.getTime();
  
  // Conversion des millisecondes en jours
  // 1000 ms * 60 s * 60 min * 24 h = 86 400 000 ms par jour
  const msInADay = 1000 * 60 * 60 * 24;
  
  // On ajoute 1 car le 1er janvier compte comme le 1er jour
  return Math.floor(diffInMs / msInADay) + 1;
};