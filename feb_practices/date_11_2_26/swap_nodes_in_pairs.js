// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Explanation:



// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]

 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

function arrToLinkedList(arr) {
  return arr.reduceRight((next, val) => {
    return new ListNode(val, next);
  }, null);
}
var swapPairs = function(head) {
    let arr=[]
    let temp=head;
    let i=0;
    let c=0;
    while(temp!==null){
        if(!arr[i]){
            arr[i]=[];
        }
        arr[i].push(temp.val);
        if(arr[i].length===2){
            i++;
        }
        temp=temp.next;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].length===2){
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