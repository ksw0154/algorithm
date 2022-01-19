const arr = [1, 2, 3, 4];

function solution(arr) {
  // var answer = 0;

  // return answer;

  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(solution(arr));
