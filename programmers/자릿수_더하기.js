const n = 987;

function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, x) => (acc += parseInt(x)), 0);
}

console.log(solution(n));
