const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue == null) {
      this.queue = new ListNode(value);
    } else {
      let head = this.queue;
      while (head.next != null) {
        head = head.next;
      }
      head.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.queue == null) return;

    let data = this.queue.data;
    
    this.queue = this.queue.next;
    return data;
  }
}

module.exports = {
  Queue
};
