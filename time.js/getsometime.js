export const firstDayWeek = (week, year) => {
  // Création de la date pour le 1er janvier de l'année donnée
  let date = new Date(year + '-01-01');

  // Si on cherche la première semaine, on retourne directement le 1er janvier
  if (week === 1) {
    return '01-01-' + year.padStart(4, '0');
  }

  // Calcul du premier jour de la semaine demandée
  // (week - 1) * 7 jours pour se positionner au début de la bonne semaine
  date.setDate(date.getDate() + (week - 1) * 7);

  // On recule jusqu'au lundi précédent car le premier jour de la semaine est un lundi
  // getDay() : 0 pour dimanche, 1 pour lundi, etc.
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }

  // Si après avoir cherché le lundi, on se retrouve dans l'année précédente, 
  // on retourne le 1er janvier de l'année demandée[cite: 16]
  if (date.getFullYear() < parseInt(year)) {
    return '01-01-' + year.padStart(4, '0');
  }

  // Formatage en dd-mm-yyyy[cite: 16]
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const formattedYear = String(date.getFullYear()).padStart(4, '0');

  return `${day}-${month}-${formattedYear}`;
};