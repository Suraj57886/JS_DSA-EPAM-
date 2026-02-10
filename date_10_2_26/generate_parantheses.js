// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8
var backtrack=function(n,curr,nopen,nclose,temp,res){
    if(nopen===n && nclose===n){
        res.push(temp)
        return;
    }
    if(nopen<n){
        temp+='(';
        backtrack(n,curr+1,nopen+1,nclose,temp,res);
        temp=temp.slice(0,-1);
    }
    if(nclose<nopen){
        temp+=')';
        backtrack(n,curr+1,nopen,nclose+1,temp,res);
        temp=temp.slice(0,-1)
    }
}
var generateParenthesis = function(n) {
    let no=0;
    let nc=0;
    let res=[]
    let temp=""
    backtrack(n,0,no,nc,temp,res);
    return res;
};
