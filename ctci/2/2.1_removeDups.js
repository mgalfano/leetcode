/*
2.1: Remove Dups
Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

function removeDups(list) {
  // store occurrences of each value
  var items = {};
  var current = list.head;
  items[current.value] = 1;

  while (current.next !== null) {
    current = current.next;
    
    let currentValue = current.value;
    if (items[currentValue]) {
      items[currentValue]++;
    } else {
      items[currentValue] = 1;
    }

  }

  for (var item in items) {
    if (items[item] > 1) {
      
      let current = list.head;
      while (current.value) {
        if (current.value.toString() === item) {
          current.value = current.next.value;
          current.next = current.next.next;
        }
        console.log(current);
        if (current.next === null) {
          break;
        }
        current = current.next;
      }
      

    }
  }

  

  // console.log(current);
  // return current;
}

var list = {
  head: {
    value: 4, 
    next: {
      value: 6,
      next: {
        value: 2,
        next: {
          value: 6,
          next: {
            value: 10,
            next: null
          }
        }
      }
  }}
}

removeDups(list);