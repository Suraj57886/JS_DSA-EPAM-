// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
var longestConsecutive = function(nums) {
    // DSU approach
    // let parent=new Map();
    // let size=new Map();

    // function find(x){
    //     if(parent.get(x)!==x){
    //         parent.set(x,find(parent.get(x)))
    //     }
    //     return parent.get(x);
    // }

    // function union(x,y){
    //     const rx=find(x)
    //     const ry=find(y)

    //     if(rx===ry) return;
    //     if(size.get(rx)<size.get(ry)){
    //         parent.set(rx,ry);
    //         size.set(ry,size.get(ry)+size.get(rx))
    //     }else{
    //         parent.set(ry,rx)
    //         size.set(rx,size.get(rx)+size.get(ry))
    //     }
    // }

    // for(let num of nums){
    //     if(!parent.has(num)){
    //         parent.set(num,num)
    //         size.set(num,1)
    //     }
    // }

    // for(let num of nums){
    //     if(parent.has(num-1)){
    //         union(num,num-1)
    //     }
    // }
    // let max=0
    // for(let num of nums){
    //     let parent=find(num)
    //     max=Math.max(max,size.get(parent))
    // }
    // return max;
    let mySet=new Set();
    for(let num of nums){
        mySet.add(num)
    }
    let max=0;
    for(let num of mySet){
        if(!mySet.has(num-1)){
            let curr=num
            let len=1;

            while(mySet.has(curr+1)){
                len++;
                curr++;
            }
            max=Math.max(max,len)
        }
    }
    return max;
};