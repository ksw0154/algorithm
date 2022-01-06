const s = "one4seveneight";

// 나의 시도
function solution(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  let str = "";
  for (let i = 0; i < s.length; i++) {
    let found = s[i].match(/[a-z|A-Z]/);
    if (found === null) {
      answer += s[i];
    } else {
      str += s[i];
      if (numbers.includes(str)) {
        answer += numbers.indexOf(str);
        str = "";
      }
    }
  }
  return Number(answer);
}

// 프로그래머스 풀이
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    // numbers[i]로 split했을 때 split이 되면 빈문자열과 나머지 문자열을 가진 배열로 반환한다.
    let arr = answer.split(numbers[i]);
    // 빈 문자열 자리를 i로 join한다.
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution(s));
