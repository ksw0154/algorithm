const n = 12;

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? (count += i) : "";
  }
  return count;
}

console.log(solution(n));
