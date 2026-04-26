// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105
var trap = function(heights) {
    let left=[]
    let right=[]

    let leftWall=0
    for(let i=0;i<heights.length;i++){
        if(i===0){
            left[i]=0;
        }else{
            left[i]=leftWall;
        }
        leftWall=Math.max(leftWall,heights[i])
    }

    let rightWall=0
    for(let i=heights.length-1;i>=0;i--){
        if(i===heights.length-1){
            right[i]=0
        }else{
            right[i]=rightWall;
        }
        rightWall=Math.max(rightWall,heights[i])
    }


    let totalWater=0
    for(let i=0;i<heights.length;i++){
        let leftBigWall=left[i]
        let rightBigWall=right[i]

        let minOfBoth=Math.min(leftBigWall,rightBigWall);
        let currPossible=Math.max(0,minOfBoth-heights[i])
        totalWater+=currPossible
    }
    return totalWater;
};