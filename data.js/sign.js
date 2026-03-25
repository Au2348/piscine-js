function sign (a)
if (a > 0) 
    return 1;
if (a < 0) {
    return -1;
  }
  else return 0;

  function sameSign (a, b) 
  if (a > 0 && b > 0) {
    return true;
  }
  if (a < 0 && b < 0) {
    return true;
  }
  return false;
}