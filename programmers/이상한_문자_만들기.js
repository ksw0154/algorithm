const s = "try hello world";

// function solution(s) {
//   const str = s.split(" ");
//   var answer = [];

//   let tmp = "";
//   str.forEach((element) => {
//     for (let i = 0; i < element.length; i++) {
//       tmp += i % 2 == 0 ? element[i].toUpperCase() : element[i].toLowerCase();
//     }

//     answer.push(tmp);
//     tmp = "";
//   });

//   return answer.join(" ");
// }

function solution(s) {
  return s
    .split(" ")
    .map((x) =>
      x
        .split("")
        .map((y, index) => (index % 2 == 0 ? y.toUpperCase() : y.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution(s));
