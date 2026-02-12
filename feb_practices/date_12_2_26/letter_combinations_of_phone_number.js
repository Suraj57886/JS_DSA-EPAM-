// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 1 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

let myMap=new Map();
    myMap.set('2',['a','b','c'])
    myMap.set('3',['d','e','f'])
    myMap.set('4',['g','h','i'])
    myMap.set('5',['j','k','l'])
    myMap.set('6',['m','n','o'])
    myMap.set('7',['p','q','r','s'])
    myMap.set('8',['t','u','v'])
    myMap.set('9',['w','x','y','z']);
var letterCombinations = function(digits) {
    res=[];
    backtrack(digits,0,"",res)
    return res;
}
var backtrack=function(digits,index,temp,res){
    if(index===digits.length){
        if(temp.length===digits.length){
            res.push(temp);
        }
        return;
    }
    for(let i=0;i<myMap.get(digits[index]).length;i++){
        temp+=(myMap.get(digits[index]))[i];
        backtrack(digits,index+1,temp,res)
        temp=temp.slice(0,temp.length-1);
    }
}