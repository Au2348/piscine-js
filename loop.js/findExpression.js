const add4 = '+4';
const mu12 = '*2';

function findExpression(n) {
  let steps = [];
  let current = 1;

  while (current !== n) {
    if (current > n) return undefined;

    if (current * 2 <= n) {
      steps.push(mu12);
      current *= 2;
    } else {
      steps.push(add4);
      current += 4;
    }
  }

  return steps.join(' ');
}