const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.map((size) => size.sort((a, b) => b - a));

  for (let i = 0; i < sizes.length; i++) {
    width = sizes[i][0] > width ? sizes[i][0] : width;
    height = sizes[i][1] > height ? sizes[i][1] : height;
  }

  return width * height;
}

console.log(solution(sizes));
