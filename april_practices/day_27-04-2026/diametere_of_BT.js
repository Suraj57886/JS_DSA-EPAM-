// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100
var diameterOfBinaryTree = function(root) {
    if(root===null){
        return 0
    }
    let max=0;
    function updateMax_by_returningHeights(root){
        if(root===null){
            return 0
        }
        let left=updateMax_by_returningHeights(root.left);
        let right=updateMax_by_returningHeights(root.right);
        // as we need to find max diameter at every node, we put the comparision here. else simply refer previous approach in comment mentioned down.
        max=Math.max(max,left+right)
        return 1+Math.max(left,right)
    }
    updateMax_by_returningHeights(root)
    return max;

    // if(root===null){
    //     return 0
    // }
    // function noOfEdges(root){
    //     if(root===null){
    //         return 0
    //     }
    //     let left=noOfEdges(root.left);
    //     let right=noOfEdges(root.right);
    //     return 1+Math.max(left,right)
    // }
    // let leftL=noOfEdges(root.left);
    // let rightL=noOfEdges(root.right);
    // return leftL+rightL;
};