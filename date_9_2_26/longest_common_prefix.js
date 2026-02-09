// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

var longestCommonPrefix = function(strs) {
    if(!strs || strs.length===0){
        return ""
    }
    strs.sort()
    let first=strs[0];
    let last=strs[strs.length-1];
    let i=0
    for( i=0;i<first.length;i++){
        if(first[i]!==last[i]){
            break;
        }
    }
    return first.substring(0,i);
};