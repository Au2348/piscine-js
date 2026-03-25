// indexOf : cherche depuis le début (ou depuis un index donné)
const indexOf = (arr, val, from = 0) => {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// lastIndexOf : cherche depuis la fin
const lastIndexOf = (arr, val) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) return i
  }
  return -1
}

// includes : utilise indexOf pour savoir si la valeur existe
const includes = (arr, val) => indexOf(arr, val) !== -1
