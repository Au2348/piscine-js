function isPositive(num) {
  return num > 0;
}

function abs(num) {
  if (num < 0) {
    return -num;
  }
  return num;
}
Math.abs = undefined; // On redéfinit Math.abs pour s'assurer que notre fonction est utilisée
