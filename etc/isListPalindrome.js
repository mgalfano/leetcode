// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {

  var values = [];
  while (l) {
    values.push(l.value);
    l = l.next;
  }

  return values.join('') === values.reverse().join('');

}

var list = {
  value: 0, next: {
    value: 1, next: {
      value: 0, next: null
    }
  }
}

console.log(isListPalindrome(list));