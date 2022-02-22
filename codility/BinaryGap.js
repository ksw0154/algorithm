const N = 1041;

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  let answer = 0;
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) {
      count += 1;
    } else if (binary[i] == 1 && count > answer) {
      answer = count;
      count = 0;
    }
  }
  return answer;
}

console.log(solution(N));
