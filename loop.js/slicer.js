function slice(input, start, end) {
  const len = input.length;

  // Gérer les index négatifs
  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let e = end === undefined ? len : end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  const result = [];
  for (let i = s; i < e; i++) {
    result.push(input[i]);
  }

  return typeof input === 'string' ? result.join('') : result;
}