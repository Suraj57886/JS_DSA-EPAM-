// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted linked list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

var mergetwo = function(list1, list2) {
    let dummy=new ListNode(0);
    let temp=dummy;
    while(list1!==null && list2!==null){
        if(list1.val<=list2.val){
            temp.next=new ListNode(list1.val);
            list1=list1.next;
        }else{
            temp.next=new ListNode(list2.val);
            list2=list2.next;
        }
        temp=temp.next;
    }
    temp.next= (list1!==null)? list1:list2
    return dummy.next;
};
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let result = null;
    for (let i = 0; i < lists.length; i++) {
        result = mergetwo(result, lists[i]);
    }
    return result;
};