const d = [1, 3, 2, 5, 4];
const budget = 9;

function solution(d, budget) {
  var answer = 0;
  let count = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    answer += d[i];

    if (answer <= budget) {
      count++;
    }
  }

  return count;
}

console.log(solution(d, budget));
