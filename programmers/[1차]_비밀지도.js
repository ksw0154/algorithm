// 10진수에서 비트연산(|)을 진행한 뒤 2진수로 변경한다.

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
  let maze = [];
  for (let i = 0; i < n; i++) {
    let tmp = (arr1[i] | arr2[i]).toString(2);
    if (tmp.length < n) {
      tmp = "0".repeat(n - tmp.length) + tmp;
    }
    tmp = tmp.replace(/1/g, "#");
    tmp = tmp.replace(/0/g, " ");
    maze.push(tmp);
  }
  return maze;
}

console.log(solution(n, arr1, arr2));

// 비트 연산(|)을 2진수로 바꿔서 하는 줄 알고 거기서 시간 많이 잡아먹음
// 에러가 발생해서 보니 자리수 때문에 에러 발생 (비트 연산은 ok)
// 자리수 채우기 (repeat())
// replace도 정규식 활용해서 진행
