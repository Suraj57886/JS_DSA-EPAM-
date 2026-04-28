// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:

// Input: root = [1,2,3,null,5,null,4]

// Output: [1,3,4]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,null,null,null,5]

// Output: [1,3,4,5]

// Explanation:



// Example 3:

// Input: root = [1,null,3]

// Output: [1,3]

// Example 4:

// Input: root = []

// Output: []

 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
var rightSideView = function(root) {
    let levels=[]
    function dfs(root,level){
        if(!root){
            return ;
        }
        if(levels.length===level){
            levels.push([])
        }
        levels[level].push(root.val)
        dfs(root.left,level+1)
        dfs(root.right,level+1)
    }
    dfs(root,0)
    let ans=[]
    for(let level of levels){
        ans.push(level[level.length-1])
    }
    return ans
};