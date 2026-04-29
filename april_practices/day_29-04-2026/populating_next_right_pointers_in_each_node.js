// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 212 - 1].
// -1000 <= Node.val <= 1000
var connect = function(root) {
    if(!root){
        return root;
    }
    let levels=[]
    function dfs(root,level){
        if(!root){
            return;
        }
        if(levels.length===level){
            levels.push([])
        }
        // instead of only values, we put each node.val and node together as single array element
        levels[level].push([root.val,root]);
        dfs(root.left,level+1)
        dfs(root.right,level+1)
    }
    dfs(root,0)
    for(let level of levels){
        for(let i=0;i<level.length;i++){
            // let value=level[i][0]
            let node=level[i][1]
            let nextNode=level[i+1]===undefined? null:level[i+1][1]
            node.next=nextNode;
        }
    }
    return root;
    // if(!root){
    //     return root
    // }
    // // as it is perfect binary tree. we will make use of it.
    // let leftMost=root;
    // while(leftMost.left){
    //     let curr=leftMost;
    //     while(curr){
    //         curr.left.next=curr.right
    //         if(curr.next){
    //             curr.right.next=curr.next.left
    //         }
    //         curr=curr.next;
    //     }
    //     leftMost=leftMost.left;
    // }
    // return root;
};