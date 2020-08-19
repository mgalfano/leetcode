/*
Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//


function removeKFromList(l, k) {
  var current = l;
  var previous = null;

  while (current) {

    if (current.value === k) {
      if (!previous) { // if current node is head of list
        l = current.next; // resets list's head to next node
        current = l;
      } else {
        previous.next = current.next;
        current = current.next
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
  return l;
}
