const n = 118372;

function solution(n) {
  var answer = "";

  // String(n)
  //   .split("")
  //   .sort((a, b) => b - a)
  //   .map((x) => (answer += x));

  // return parseInt(answer);

  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(solution(n));
