/*
1.7: Rotate Matrix
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

/* 
I: Array of arrays (NxN matrix)
O: Array of arrays (NxN matrix)
C: n/a
E: empty array

for i = 0 to n
  temp = top[i]
  top[i] = left[i]
  left[i] = bottom[i]
  bottom[i] = right[i]
  right[i] = temp
*/

function rotateMatrix(matrix) {
  var edge = matrix.length - 1;

  function movePixels(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel; 

    // first transformation
    var toRow = row; // 0
    var toCol = col; // 1
    var toPixel = matrix[row][col];

    // do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      debugger;
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;

      // console.log(fromRow);
      // console.log(matrix);
      // console.log('-----------');
    }
  }
  
  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log('i, j:', i, j);
      movePixels(i, j);
    }
  }
}

var matrix = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];

rotateMatrix(matrix);