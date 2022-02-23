const A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result = result ^ A[i];
    console.log(result);
  }
}

console.log(solution(A));

// submit 했을 떄
// 1. runtime error
// 2. timeout
// 시간 복잡도 O(N**2)
// 왜지...
// filter를 쓰지말아보자..
