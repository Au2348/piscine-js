export const addWeek = (date) => {
  // L'époque de référence est le 0001-01-01 (un lundi)
  const epoch = new Date('0001-01-01');
  
  // Calcul du nombre de jours écoulés depuis l'époque
  // On utilise Math.round pour éviter les problèmes de décalage horaire (DST)
  const diffInMs = date.getTime() - epoch.getTime();
  const daysDiff = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  
  // Tableau des jours pour une semaine de 14 jours
  const week14 = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 
    'secondFriday', 'secondSaturday', 'secondSunday'
  ];
  
  // Le modulo 14 nous donne l'index dans notre nouvelle semaine
  return week14[daysDiff % 14];
};

export const timeTravel = ({ date, hour, minute, second }) => {
  // On crée une copie de la date pour ne pas modifier l'originale
  const newDate = new Date(date);
  
  // On applique les nouvelles valeurs de temps fournies dans l'objet[cite: 15]
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);
  
  return newDate;[cite: 15]
};