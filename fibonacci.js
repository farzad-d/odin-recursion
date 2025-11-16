// Iterative version
function fibs(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  const seq = [0, 1];
  while (seq.length < n) seq.push(seq.at(-1) + seq.at(-2));
  return seq;
}

console.log(fibs(8));

// Recursive version
function fibsRec(n, seq = [0, 1]) {
  if (n <= seq.length) return seq.slice(0, n);

  seq.push(seq.at(-1) + seq.at(-2));
  return fibsRec(n, seq);
}

console.log(fibsRec(8));
