const s = "Zbcdefg";

function solution(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
}

console.log(solution(s));
