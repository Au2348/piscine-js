function sums(n) {
  const result = [];

  function backtrack(remaining, start, current) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i <= remaining; i++) {
      current.push(i);
      backtrack(remaining - i, i, current);
      current.pop();
    }
  }

  backtrack(n, 1, []);
  return result;
}
