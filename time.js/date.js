export const isValid = (date) => {
  // Une date est invalide si elle n'est pas une instance de Date 
  // ou si sa valeur temporelle est NaN (ex: new Date('hello'))
  if (!(date instanceof Date) && typeof date !== 'number') return false;
  return !isNaN(new Date(date).getTime());
};

export const isAfter = (date1, date2) => {
  // On compare les valeurs numériques (timestamps)
  return new Date(date1) > new Date(date2);
};

export const isBefore = (date1, date2) => {
  return new Date(date1) < new Date(date2);
};

export const isFuture = (date) => {
  // On vérifie la validité puis si c'est strictement après maintenant
  return isValid(date) && isAfter(date, Date.now());
};

export const isPast = (date) => {
  // On vérifie la validité puis si c'est strictement avant maintenant
  return isValid(date) && isBefore(date, Date.now());
};