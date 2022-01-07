// 1차 접근: 2차원 배열
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

function solution(numbers, hand) {
  const num_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  var answer = "";

  let lx = 3;
  let ly = 0;
  let rx = 3;
  let ry = 2;

  for (let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < num_array.length; i++) {
      let y = num_array[i].indexOf(numbers[j]);

      if (y == 0) {
        answer += "L";
        lx = i;
        ly = 0;
      } else if (y == 2) {
        answer += "R";
        rx = i;
        ry = 2;
      } else if (y == 1) {
        let r_dis = Math.abs(i - rx) + Math.abs(y - ry);
        let l_dis = Math.abs(i - lx) + Math.abs(y - ly);
        if (r_dis < l_dis) {
          answer += "R";
          rx = i;
          ry = y;
        } else if (l_dis < r_dis) {
          answer += "L";
          lx = i;
          ly = y;
        } else if (r_dis == l_dis) {
          if (hand == "right") {
            answer += "R";
            rx = i;
            ry = y;
          } else {
            answer += "L";
            lx = i;
            ly = y;
          }
        }
      }
    }
  }
  return answer;
}

console.log(solution(numbers, hand));
// 두점 사이의 거리를 구하는게.. 이렇게 복잡하게 써도되는건지..
