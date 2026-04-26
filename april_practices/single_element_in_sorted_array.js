// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10
 

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105
var singleNonDuplicate = function(nums) {
    // O(n)
    // let xor=0
    // for(let num of nums){
    //     xor^=num
    // }
    // return xor;
    let left=0
    let right=nums.length-1
    while(left<right){
        let mid=Math.floor(left+(right-left)/2);
        // if mid is even, mid^1 becomes the mid+1 element, if its odd-> then mid^1 is mid-1 element.
        // so if the pair matches, then it is sure that the distinct element is at the right half of the window.
        // else the distinct element is in the left window.
        // ex: [1,1,2,3,3,4,4,8,8]:
        // 1st iteration: mid=4 => mid^1=5. i.e nums[mid]===nums[mid^1]=> nums[4]===nums[5] which is false. so right=mid.
        // now mid=2 again check nums[2]===nums[3] which is false. so right=mid
        // now mid=1, but mid=1 and mid^1=mid-1 i.e 0
        // so nums[1]===nums[0] then left=mid+1 and we are left with only one element.
        // i.e index 2. i.e nums[2]=2
        if(nums[mid]===nums[mid^1]){
            left=mid+1;
        }else{
            right=mid
        }
    }
    return nums[left];
};