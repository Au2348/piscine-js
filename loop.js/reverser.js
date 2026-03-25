function reverse(input) {
  const arr = typeof input === 'string' ? input.split('') : input;
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return typeof input === 'string' ? result.join('') : result;
}