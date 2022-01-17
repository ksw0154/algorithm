const n = 12345;

function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((x) => parseInt(x));
}

console.log(solution(n));
