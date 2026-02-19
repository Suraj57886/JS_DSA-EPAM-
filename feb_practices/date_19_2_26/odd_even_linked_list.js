// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106
 
var oddEvenList = function(head) {
    let oddh=new ListNode()
    let tempo=oddh
    let evenh=new ListNode()
    let tempe=evenh
    let len=findLen(head)
    temp=head
    for(let i=0;i<len;i++){
        if((i+1)%2===1){
            tempo.next=new ListNode(temp.val)
            tempo=tempo.next
        }else{
            tempe.next=new ListNode(temp.val)
            tempe=tempe.next
        }
        temp=temp.next;
    }
    oddh=oddh.next
    evenh=evenh.next
    while(evenh!=null){
        tempo.next=evenh
        tempo=tempo.next
        evenh=evenh.next
    }
    head=oddh
    return head;
};
var findLen=function(head){
    let temp=head
    let len=0
    while(temp!==null){
        temp=temp.next
        len++
    }
    return len
}