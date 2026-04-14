// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
var searchRange = function(nums, target) {
    if(!nums || nums.length===0){
        return [-1,-1]
    }
    let firstOccIndex=getFirstOcc(nums,target)
    let lastOccIndex=getLastOcc(nums,target)
    return [firstOccIndex,lastOccIndex]
};
function getFirstOcc(nums,target){
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            right=mid-1
        }else if(nums[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return (left<nums.length && nums[left]===target)? left:-1
}
function getLastOcc(nums,target){
    let left=0
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            left=mid+1
        }else if(nums[mid]>target){
            right=mid-1
        }else{
            left=mid+1;
        }
    }
    return (right<nums.length && nums[right]===target)? right:-1
}