// multiply : additionner a, b fois
const multiply = (a, b) => {
  let result = 0
  const abs = b < 0 ? -b : b
  for (let i = 0; i < abs; i++) result += a
  return b < 0 ? -result : result
}

// divide : compter combien de fois b rentre dans a
const divide = (a, b) => {
  let result = 0
  const absA = a < 0 ? -a : a
  const absB = b < 0 ? -b : b
  let current = 0
  while (current + absB <= absA) {
    current += absB
    result++
  }
  return (a < 0) !== (b < 0) ? -result : result
}

// modulo : ce qui reste après la division
const modulo = (a, b) => {
  const absB = b < 0 ? -b : b
  const absA = a < 0 ? -a : a
  let current = absA
  while (current >= absB) current -= absB
  return a < 0 ? -current : current
}
