const trunc = (n) => n > 0 ? Math.round(n - 0.5) : Math.round(n + 0.5)

// 
const trunc = (n) => n >= 0 ? floor(n) : ceil(n)

const floor = (n) => {
  const int = trunc(n)
  return n < int ? int - 1 : int
}