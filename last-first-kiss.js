function first(element) {
    return element[0];
}

function last(element) {
    return element[element.length - 1];
}
function kiss(element) {
  // On crée un tableau [...] avec le dernier élément, suivi d'une virgule, puis le premier
  return [element[element.length - 1], element[0]];
}