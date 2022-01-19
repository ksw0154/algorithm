const x = 13;

function solution(x) {
  return x %
    String(x)
      .split("")
      .reduce((x, y) => parseInt(x) + parseInt(y)) ===
    0
    ? true
    : false;
}

console.log(solution(x));
