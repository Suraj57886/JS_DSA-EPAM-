// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
var setRow=function(matrix,row){
    for(let i=0;i<matrix[0].length;i++){
        matrix[row][i]=0;
    }
 }
 var setCol=function(matrix,col){
    for(let i=0;i<matrix.length;i++){
        matrix[i][col]=0;
    }
 }
var setZeroes = function(matrix) {
    let orig=new Set();
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                orig.add(i+","+j);
            }
        }
    }

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0 && orig.has(i+","+j)){
                setRow(matrix,i);
                setCol(matrix,j);
            }
        }
    }
    orig.clear();
    orig=null;
};