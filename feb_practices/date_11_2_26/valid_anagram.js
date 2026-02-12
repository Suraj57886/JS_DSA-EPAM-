// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let sMap=new Map();
    for(let i=0;i<s.length;i++){
        sMap.set(s[i],
        sMap.has(s[i])? sMap.get(s[i])+1 : 1
        )
    }

    for(let i=0;i<t.length;i++){
        if(!sMap.has(t[i])){
            return false;
        }
        sMap.set(t[i], sMap.get(t[i])-1);
        if(sMap.get(t[i])===0){
            sMap.delete(t[i])
        }
    }
    return sMap.size===0
};