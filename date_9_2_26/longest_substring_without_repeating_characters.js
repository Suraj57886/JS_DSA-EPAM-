// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    if(s===null || s.length===0){
        return 0;
    }
    let maxlen=0;
    let myMap=new Map();
    let left=0;
    for(let right=0;right<s.length;right++){
        while(myMap.has(s[right])){
            myMap.delete(s[left]);
            left++;
        }
        myMap.set(s[right],1);
        maxlen=Math.max(maxlen,right-left+1);
    }
    return maxlen;
};