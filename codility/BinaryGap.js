const N = 1376796946;

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  console.log(binary);
  let answer = 0;
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) {
      count += 1;
    } else if (binary[i] == 1) {
      if (count > answer) {
        answer = count;
        count = 0;
      } else {
        count = 0;
      }
    }
  }
  return answer;
}

console.log(solution(N));
