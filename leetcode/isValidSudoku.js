// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    // loop through rows
    console.log('----------ROWS----------');
    for (let row = 0; row <= 8; row++) {
        let valuesRow = new Set();
        for (let col = 0; col <= 8; col++) { // uh oh
            console.log('ROW:', row, '  |  COL:', col, '  |  VALUES:', valuesRow);
            if (board[row][col] === '.') { continue; }
            if (!valuesRow.has(board[row][col])) {
                valuesRow.add(board[row][col]);
            } else {
                return false;
            }
        }
    }

    // loop through columns
    console.log('----------COLUMNS----------');
    for (let col = 0; col <= 8; col++) {
        let valuesCol = new Set();
        for (let row = 0; row <= 8; row++) { // uh oh
            console.log('ROW:', row, '  |  COL:', col, '  |  VALUES:', valuesCol);
            if (board[row][col] === '.') { continue; }
            if (!valuesCol.has(board[row][col])) {
                valuesCol.add(board[row][col]);
            } else {
                return false;
            }
        }
    }

    // loop through grids
    console.log('----------GRIDS----------');
    for (let gridRow = 0; gridRow <= 8; gridRow += 3) {
        for (let gridCol = 0; gridCol <= 8; gridCol += 3) { // uh oh
            let valuesGrid = new Set();
            for (let row = gridRow; row <= gridRow+2; row++) { // uhhhhhhhhh
                for (let col = gridCol; col <= gridCol+2; col++) { // WTF??????
                    console.log('ROW:', row, '  |  COL:', col, '  |  VALUES:', valuesGrid);
                    if (board[row][col] === '.') { continue; }
                    if (!valuesGrid.has(board[row][col])) {
                        valuesGrid.add(board[row][col]);
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    return true;
}

var validBoard = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log("\n", isValidSudoku(validBoard), "\n=================\n"); // true

var invalidBoard = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,["8","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log("\n", isValidSudoku(invalidBoard), "\n=================\n"); // false