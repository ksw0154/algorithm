const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let stack = [];
  var answer = 0;
  for (let i = 0; i < moves.length; i++) {
    const loc = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][loc] !== 0) {
        if (stack[stack.length - 1] == board[j][loc]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][loc]);
        }
        board[j][loc] = 0;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(board, moves));
