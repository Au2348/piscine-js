function dogYears(planet, ageInSeconds) {
  // 1. Le dictionnaire des planètes fourni par l'énoncé
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  // 2. Le nombre de secondes dans une année sur Terre
  const earthYearInSeconds = 31557600;

  // 3. Le grand calcul tout-en-un
  let dogAge = (ageInSeconds / earthYearInSeconds / orbitalPeriods[planet]) * 7;

  // 4. On arrondit à 2 chiffres après la virgule et on renvoie le résultat
  return Number(dogAge.toFixed(2));
}