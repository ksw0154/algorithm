const dartResult = "1D2S0T";

function solution(dartResult) {
  const arr = dartResult.match(/[0-9]+|[a-zA-Z]|\W*/g);
  const numArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) || parseInt(arr[i]) == 0) {
      numArray.push(arr[i]);
    } else {
      switch (arr[i]) {
        case "S":
          numArray[numArray.length - 1] = numArray[numArray.length - 1] ** 1;
          break;
        case "D":
          numArray[numArray.length - 1] = numArray[numArray.length - 1] ** 2;
          break;
        case "T":
          numArray[numArray.length - 1] = numArray[numArray.length - 1] ** 3;
          break;
        default:
          break;
      }

      switch (arr[i]) {
        case "*":
          numArray[numArray.length - 1] = numArray[numArray.length - 1] * 2;
          if (numArray[numArray.length - 2]) {
            numArray[numArray.length - 2] = numArray[numArray.length - 2] * 2;
          }
          break;
        case "#":
          numArray[numArray.length - 1] = numArray[numArray.length - 1] * -1;
          break;
      }
    }
  }
  console.log(numArray);
  return numArray.reduce((a, b) => a + b);
}

console.log(solution(dartResult));
