export const matchCron = (cron, date) => {
  // On sépare la chaîne cron en 5 parties : minute, hour, day, month, dayOfWeek
  const fields = cron.split(' ');[cite: 17]

  // On extrait les valeurs correspondantes de l'objet Date fourni
  const actual = {
    minute: date.getMinutes(),[cite: 17]
    hour: date.getHours(),[cite: 17]
    day: date.getDate(),[cite: 17]
    month: date.getMonth() + 1, // getMonth() commence à 0
    // getDay() : 0 pour dimanche, mais le cron demande 1 pour lundi et 7 pour dimanche
    dayOfWeek: date.getDay() === 0 ? 7 : date.getDay(),[cite: 17]
  };

  // On compare chaque champ du cron avec la valeur réelle
  // Si le champ est '*', c'est toujours vrai. Sinon, on compare les nombres[cite: 17]
  const cronValues = [
    actual.minute,
    actual.hour,
    actual.day,
    actual.month,
    actual.dayOfWeek,
  ];

  return fields.every((field, index) => {
    return field === '*' || parseInt(field) === cronValues[index];[cite: 17]
  });
};