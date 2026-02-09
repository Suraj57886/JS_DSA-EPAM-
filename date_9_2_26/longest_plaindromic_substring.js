// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


// const isPalindrome=function(s){
//     return (s.split("").reverse().join(""))===s;
//  }
var longestPalindrome = function(s) {
    if(s===null || s.length===0){
        return "";
    }
    let res="";
    // for(let right=0;right<s.length;right++){
    //     let left=0;
    //     while(left<=right){
    //         let sub=s.substring(left,right+1);

    //         if(isPalindrome(sub) && sub.length>res.length){
    //             res=sub;
    //         }
    //         left++;
    //     }
    // }
    for(let i=0;i<s.length;i++){
        // firstly for odd length palindromes
        let left=right=i;
        while(left>=0 && right<s.length && (s[left]===s[right])){
            left--;
            right++;
        }
        let sub=s.substring(left+1,right);
        res=sub.length>res.length? sub:res;

        // now for even length palindromes;
        left=i;
        right=i+1;
        while(left>=0 && right<s.length && (s[left]===s[right])){
            left--;
            right++;
        }
        sub=s.substring(left+1,right);
        res=sub.length>res.length? sub:res;
    }
    return res;
};