/*
237. Delete Node in a Linked List
https://leetcode.com/problems/delete-node-in-a-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */


// List isn't given. No checking involved, the check is already done. This simply deletes the node.
// Confusing prompt...
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};