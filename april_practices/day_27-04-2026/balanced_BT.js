// Given a binary tree, determine if it is height-balanced.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104
var isBalanced = function(root) {
    if(root===null){
        return true;
    }
    function height(root){
        if(root===null){
            return 0
        }
        let leftH=height(root.left);
        let rightH=height(root.right);
        if(leftH===-1 || rightH===-1){
            return-1;
        }
        if(Math.abs(leftH-rightH)>1) return -1;
        return 1+Math.max(leftH,rightH);
    }
    return height(root)===-1? false:true;
};