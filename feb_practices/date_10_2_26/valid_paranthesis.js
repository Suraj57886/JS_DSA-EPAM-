// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
var isValid = function(s) {
    let st=new Stack();
    for(let i=0;i<s.length;i++){
        if(s[i]===')' || s[i]==='}' || s[i]===']'){
            if(st.isEmpty()){
                return false;
            }
            if(
                (s[i]===')' && st.peek()==='(')
                ||
                (s[i]==='}' && st.peek()==='{')
                ||
                (s[i]===']' && st.peek()==='[')
                ){
                    st.pop();
                }else{
                    return false;
                }
        }else{
            st.push(s[i]);
        }
    }
    return st.isEmpty()? true:false;
};