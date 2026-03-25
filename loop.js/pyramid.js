function pyramid(char, depth) {
  const lines = [];

  for (let i = 1; i <= depth; i++) {
    const spaces = ' '.repeat(depth - i);
    const chars = char.repeat(2 * i - 1);
    lines.push(spaces + chars + spaces);
  }

  return lines.join('\n');
}
