// Array → Set
const arrToSet = (arr) => new Set(arr)

// Array → String
const arrToStr = (arr) => arr.join('')

// Set → Array
const setToArr = (set) => [...set]

// Set → String
const setToStr = (set) => [...set].join('')

// String → Array
const strToArr = (str) => [...str]

// String → Set
const strToSet = (str) => new Set(str)

// Map → Object
const mapToObj = (map) => Object.fromEntries(map)

// Object → Array
const objToArr = (obj) => Object.values(obj)

// Object → Map
const objToMap = (obj) => new Map(Object.entries(obj))

// Array → Object
const arrToObj = (arr) => Object.fromEntries(arr.map((val, i) => [i, val]))

// String → Object
const strToObj = (str) => Object.fromEntries([...str].map((char, i) => [i, char]))

// superTypeOf
const superTypeOf = (val) => {
  if (val instanceof Set) return 'Set'
  if (val instanceof Map) return 'Map'
  if (Array.isArray(val)) return 'Array'
  if (val === null) return 'null'
  return typeof val === 'number' && isNaN(val) ? 'Number' : 
         val === undefined ? 'undefined' :
         typeof val === 'function' ? 'Function' :
         typeof val === 'string' ? 'String' :
         typeof val === 'number' ? 'Number' :
         'Object'
}
