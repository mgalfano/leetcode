// 2.2: Return Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list

const LinkedList = require('./LinkedListX');

let list = new LinkedList();
list.append(2);
list.append(5);
list.append(3);
list.append(1);
list.append(8);

/*
i: list, k
o: array
c: n/a
e: empty list, k doesn't exist in list, negative k
*/

let returnKthToLast = function(list, k) {
    if (list.head === null) { return undefined; }

    // create empty array to return
    let arr = [];

    // traverse list until k-1
    let cur = list.head;
    for (let i = 0; i < k-1; i++) {
        cur = cur.next;
    }
    
    // loop until the end of the list
    while (cur) {
        // add current value to array
        arr.push(cur.value);
        cur = cur.next;
    }
    // return array
    return arr;
};

console.log(returnKthToLast(list, 3));
