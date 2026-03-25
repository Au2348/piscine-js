function RNA(dna) {
  const map = { G: 'C', C: 'G', T: 'A', A: 'U' };
  return dna.split('').map(base => map[base]).join('');
}

function DNA(rna) {
  const map = { C: 'G', G: 'C', A: 'T', U: 'A' };
  return rna.split('').map(base => map[base]).join('');
}
