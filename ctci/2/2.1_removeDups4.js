// 2.1: Remove Dups
// Write code to remove duplicates from an unsorted linked list
// FOLLOW UP: How would you solve this problem is a temporary buffer is not allowed?

/*
input: value of duplicates to be removed (nope, none)
output: ??
constraints: n/a
edge cases:
    - no duplicates
    - empty list
    - multiple duplicates








*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.values = []; // just to see if it pushes properly
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            // traverse to the end
            var cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            // set cur's next to newNode
            cur.next = newNode;
        }
        this.values.push(val);
        return this;
    }
}

var ll = new LinkedList();
ll.push(5);
ll.push(5);
ll.push(3);
console.log(ll);

var removeDups = function(list) {
    // initialize Set to keep track of values so far
    let uniqueValues = new Set();
    // init cur, prev(?)
    let cur = list.head;
    let prev = null;
    // traverse down list
    while (cur.next) {
        // if value is not in Set, 
        if (!uniqueValues.has(cur.val)) {
            // add to Set
            uniqueValues.add(cur.val);
            prev = cur;
            cur = cur.next;
        } else {
            // store cur's next in variable (nextNode)
            let nextNode = cur.next;
            // set prev's next to cur's next
            prev.next = cur.next;
            // set cur's next to null
            cur.next = null;
            cur = nextNode;
        }
    }

    return list;
};

console.log(removeDups(ll));