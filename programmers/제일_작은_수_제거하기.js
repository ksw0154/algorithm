const arr = [4, 1, 2, 3];

function solution(arr) {
  // Math.min(arr)로 넘기면 NaN값이 나온다.
  // Math.min or max는 배열이 아니라 고유한 변수를 기대한다.
  // 표현식이 바꼈다. Math.min.apply(Math, arrayName)

  if (arr.length === 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min.apply(Math, arr)), 1);
  }
  return arr;
}

console.log(solution(arr));
