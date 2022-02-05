const n = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(n, stages) {
  let answer = [];

  let count = stages.length;
  for (let i = 1; i <= n; i++) {
    const stage_count = stages.filter((x) => x == i).length;
    answer[i - 1] = { index: i, ratio: stage_count / count };
    count -= stage_count;
  }

  answer.sort((a, b) => b.ratio - a.ratio);
  return answer.map((x) => x.index);
}

console.log(solution(n, stages));

let tt = [1, 3, 2, 6, 4];

tt.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});

console.log(tt);
