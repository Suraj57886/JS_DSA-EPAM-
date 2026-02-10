// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function (board) {
    //validate rows
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let Item = board[i][j];
            if (set.has(Item)) {
                return false;
            } else if (Item != '.') {
                set.add(Item);
            }
        }
    }

    // Validate columns
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let Item = board[j][i];
            if (set.has(Item)) {
                return false;
            } else if (Item != '.') {
                set.add(Item);
            }
        }
    }

    // Validate boxes
    const starts = [
        [0, 0], [0, 3], [0, 6],
        [3, 0], [3, 3], [3, 6],
        [6, 0], [6, 3], [6, 6]
    ];
    for (const start of starts) {
        const set = new Set();
        const rowStart = start[0];
        const colStart = start[1];

        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                const item = board[i][j];
                if (set.has(item)) {
                    return false;
                } else if (item !== '.') {
                    set.add(item);
                }
            }
        }
    }
    return true;
};