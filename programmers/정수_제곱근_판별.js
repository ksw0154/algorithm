const n = 121;

function solution(n) {
  const x = Math.sqrt(n);

  return x % 1 === 0 ? (x + 1) * (x + 1) : -1;
}

console.log(solution(n));
