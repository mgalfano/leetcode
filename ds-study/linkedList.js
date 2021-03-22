class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    deleteAtIndex(idx) {
        if (idx > this.length - 1 || !this.head) { return undefined; }
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur.next;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        cur.next = null;
        cur.prev = null;

        this.length--;
        return this;
    }

}

var list = new LinkedList(3);
console.log(list);