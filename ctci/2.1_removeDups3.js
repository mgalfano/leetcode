/*
2.1: Remove Dups
Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

function removeDups(list) {
  var values = new Set();
  var previous = null;
  var current = list;

  while (current) {
    // if current's value exists in Set
    if (values.has(current.value)) {
      // if there is no previous, set current to current's next
      if (!previous) {
        var temp = current.next;
        current.next = null;
        current = temp;
      }
      // point prev's next to current's next
      previous.next = current.next;

    } else {
      // if value is not in Set
      // add current value to Set
      values.add(current.value);
    }
    previous = current;
    current = current.next;
  }

  return list;
}

var ll = {
  value: 5, next: {
    value: 3, next: {
      value: 1, next: {
        value: 3, next: null
      }
    }
  }
};

var ll2 = {
  value: 1, next: {
    value: 1, next: {
      value: 1, next: {
        value: 5, next: {
          value: 5, next: {
            value: 10, next: {
              value: 10, next: {
                value: 60, next: null
              }
            }
          }
        }
      }
    }
  }
};

// console.log(removeDups(ll));
console.log(removeDups(ll2));