/*
2.1: Remove Dups
Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

function removeDups(list) {
  // i: linked list
  // o: linked list
  // c: n/a - no buffer later
  // e: empty list, all duplicates

  // record items and quantities in a separate list
  var values = {};
  var current = list.head;
  
  while (current) {
    if (values[current.value]) {
      values[current.value]++;
    } else {
      values[current.value] = 1;
    }
    
    current = current.next;
  }

  // go through separate list and delete singles
  for (var item in values) {
    if (values[item] === 1) {
      delete values[item];
    }
  }

  // for each item in separate list, go through linked list and delete nodes with same value as item
  var current = list.head;
  var previous;

  while (current && current.next) {
    if (values.hasOwnProperty(current.value)) {
      previous = current;
      current = current.next.next;
    } else {
      current = current.next;
      
    }
    previous.next = current.next;
    
  }
  console.log(list);
  // return linked list
}

var linkedList = {
  head: {
    value: 2,
    next: {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 2,
          next: null
        }
      }
    }
  }
};

removeDups(linkedList);