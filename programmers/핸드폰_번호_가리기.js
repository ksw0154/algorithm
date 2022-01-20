const phone_number = "01033334444";

function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

console.log(solution(phone_number));
