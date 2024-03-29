// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function (board) {
  for(let i = 0; i < 9; i++){
    let row = new Set()
    let col = new Set()
    let box = new Set()
    for(let j = 0; j < 9; j++){
      let _row = board[i][j] 
      let _col = board[j][i] 
      let _box = board[3 * Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)]
      if(_row != "."){
        if(row.has(_row)) return false
        row.add(_row)
      }
      if(_col != "."){
        if(col.has(_col)) return false
        col.add(_col)
      }
      if(_box != "."){
        if(box.has(_box)) return false
        box.add(_box)
      }
    }
  }
  return true;
};

let sudoku1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
[3 * Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)]
let sudoku2 = [
  ["8", "8", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(sudoku1))
console.log(isValidSudoku(sudoku2))