const s = "a B z";
const n = 4;

function solution(s, n) {
  var answer = "";

  const str = s.split("").map((x) => x.charCodeAt());
  str.forEach((element) => {
    if (element == " ".charCodeAt()) {
      answer += " ";
    } else {
      if (element <= "z".charCodeAt() && element >= "a".charCodeAt()) {
        element += n;
        if (element > "z".charCodeAt()) {
          answer += String.fromCharCode(element - "z".charCodeAt() + "a".charCodeAt() - 1);
        } else {
          answer += String.fromCharCode(element);
        }
      } else if (element <= "Z".charCodeAt() && element >= "A".charCodeAt()) {
        element += n;
        if (element > "Z".charCodeAt()) {
          answer += String.fromCharCode(element - "Z".charCodeAt() + "A".charCodeAt() - 1);
        } else {
          answer += String.fromCharCode(element);
        }
      }
    }
  });

  return answer;
}

console.log(solution(s, n));
