export const format = (date, formatStr) => {
  const years = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Table de correspondance pour chaque symbole
  const replacers = {
    // Année
    'yyyy': String(Math.abs(years)).padStart(4, '0'),
    'y': String(Math.abs(years)).replace(/^0+/, ''),
    'G': years >= 0 ? 'AD' : 'BC',
    'GGGG': years >= 0 ? 'Anno Domini' : 'Before Christ',

    // Mois
    'MMMM': months[month],
    'MMM': shortMonths[month],
    'MM': String(month + 1).padStart(2, '0'),
    'M': String(month + 1),

    // Jour
    'dd': String(day).padStart(2, '0'),
    'd': String(day),

    // Jour de la semaine
    'EEEE': days[dayOfWeek],
    'E': shortDays[dayOfWeek],

    // Heure (12h)
    'hh': String(hours % 12 || 12).padStart(2, '0'),
    'h': String(hours % 12 || 12),

    // Heure (24h)
    'HH': String(hours).padStart(2, '0'),
    'H': String(hours),

    // Minutes
    'mm': String(minutes).padStart(2, '0'),
    'm': String(minutes),

    // Secondes
    'ss': String(seconds).padStart(2, '0'),
    's': String(seconds),

    // AM / PM
    'a': hours < 12 ? 'AM' : 'PM',
  };

  // On utilise une RegEx pour trouver les symboles les plus longs en premier
  // pour éviter que 'yyyy' soit matché par 'y' quatre fois.
  const regex = /yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|HH|H|mm|m|ss|s|a/g;

  return formatStr.replace(regex, (match) => replacers[match]);
};