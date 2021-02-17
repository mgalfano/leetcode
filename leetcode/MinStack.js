// https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    };
};

MinStack.prototype.pop = function() {
    var poppedValue = this.stack[this.stack.length - 1];
    this.stack.pop();
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2