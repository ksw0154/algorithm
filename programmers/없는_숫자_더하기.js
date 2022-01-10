const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  var answer = -1;
  const num_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let diff = num_array.filter((x) => !numbers.includes(x));
  answer = diff.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(solution(numbers));
