/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  
  // 进位
  let carry = 0
  let result = []
  
  cal(l1, l2, carry, result)
  return result
  
};

function cal(l1, l2, carry, r) {
  if ((l1 !== null && l1.val !== null) || (l2 !== null && l2.val !== null) || carry) {
      sum = transferNum(l1) + transferNum(l2) + carry
      carry = Math.floor(sum / 10)
      r.push(sum % 10)
      
      cal(transferNext(l1), transferNext(l2), carry, r)
  }
}

function transferNum(v) {
  return v && v.val ? v.val : 0
}

function transferNext(v) {
  return v && v.next ? v.next : null
}