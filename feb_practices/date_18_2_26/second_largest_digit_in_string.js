// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and digits.
var secondHighest = function(s) {
    let numbers=new Set("0123456789")
    let digits=[]
    for(let ch of s){
        if(numbers.has(ch) && !digits.includes(parseInt(ch))){
            digits.push(parseInt(ch))
        }
    }
    digits.sort()
    console.log(digits)
    return digits.length<=1? -1:digits[digits.length-2];
};
