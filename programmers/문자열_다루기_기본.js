const s = "a234";

function solution(s) {
  if (s.length == 6 || s.length == 4) {
    return s.split("").reduce((x, y) => parseInt(x) + parseInt(y)) ? true : false;
  }
  return false;
}

console.log(solution(s));

// 1차 단순 for문으로 Number() 사용
// 2차 split.reduce parseInt 더하기 3항 연산자
