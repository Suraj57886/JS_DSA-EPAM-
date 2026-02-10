// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

function arrToLinkedList(arr) {
  return arr.reduceRight((next, val) => {
    return new ListNode(val, next);
  }, null);
}
var reverseKGroup = function(head, k) {
    let arr=[]
    let temp=head;
    let i=0;
    let c=0;
    while(temp!==null){
        if(!arr[i]){
            arr[i]=[];
        }
        arr[i].push(temp.val);
        if(arr[i].length===k){
            i++;
        }
        temp=temp.next;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].length===k){
            arr[i]=arr[i].reverse();
        }
    }
    let dummy=new ListNode(0)
    temp=dummy;
    for(let i=0;i<arr.length;i++){
        temp.next=arrToLinkedList(arr[i]);
        while(temp.next!=null){
            temp=temp.next;
        }
    }
    return dummy.next;
};