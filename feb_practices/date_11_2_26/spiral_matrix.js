// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let vis=[]
    for(let i=0;i<m;i++){
        vis[i]=[]
        for(let j=0;j<n;j++){
            vis[i].push(false)
        }
    }
    let result = [];

    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    spin(matrix, vis, 0, 0, 0, result, dx, dy);

    return result;
};

function spin(matrix, vis, x, y, dir, result, dx, dy) {
    let m = matrix.length;
    let n = matrix[0].length;

    if (x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) return;

    vis[x][y] = true;
    result.push(matrix[x][y]);

    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx >= 0 && nx < m && ny >= 0 && ny < n && !vis[nx][ny]) {
        spin(matrix, vis, nx, ny, dir, result, dx, dy);
    } else {
        dir = (dir + 1) % 4;
        spin(matrix, vis, x + dx[dir], y + dy[dir], dir, result, dx, dy);
    }
}
