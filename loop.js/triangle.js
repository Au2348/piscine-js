function triangle(char, depth) {
  const lines = [];

  for (let i = 1; i <= depth; i++) {
    lines.push(char.repeat(i));
  }

  return lines.join('\n');
}