// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
var reverseList = function(head) {
    let prev=null;
    let curr=head;
    while(curr!==null){
        let Next=curr.next;
        curr.next=prev;

        prev=curr;
        curr=Next;
    }
    return prev;
};
var isPalindrome = function(head) {
    let temp=head;
    let len=0;
    while(temp!=null){
        temp=temp.next;
        len++;
    }
    let half=parseInt(len/2);
    let shalf=null;
    temp=head;
    for(let i=0;i<half;i++){
        temp=temp.next;
    }
    shalf=temp;
    let revshalf=reverseList(shalf);
    temp=head;
    while(temp!==null && revshalf!==null){
        if(revshalf.val!==temp.val){
            return false;
        }
        revshalf=revshalf.next;
        temp=temp.next;
    }
    return true;
};