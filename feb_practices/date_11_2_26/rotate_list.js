// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

var rotateRight = function(head, k) {
    if(head===null || head.next===null || k===0){
        return head;
    }
    let temp=head;
    let len=0;
    while(temp!=null){
        temp=temp.next;
        len++;
    }
    k=k%len;
    if(k===0){
        return head;
    }
    let fl=len-k;
    console.log(fl)
    let newtemp=head;
    for(let i=1;i<fl;i++){
        newtemp=newtemp.next;
    }
    let breakpoint=newtemp.next;
    newtemp.next=null;
    let curr=breakpoint;
    while(curr.next!=null){
        curr=curr.next;
    }
    curr.next=head;
    return breakpoint;
};