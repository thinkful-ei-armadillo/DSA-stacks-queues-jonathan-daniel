'use strict';
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;    
  }
}

// 6. Walk through the Queue class in the curriculum and understand it well. 
// Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

class Queue {
  // set head and tail for linked list
  constructor() {
    this.first = null;
    this.last = null;
  }

  // adding method to add to the back of the linked list
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      this.last.prev = node;
    }

    //set new node as the tail, this.last of the queue
    this.last = node;
  }

  // removing method to delete from the end of the linked list
  dequeue() {

    // if theres is nothing in the queue, we have nothing to remove or return
    if (this.first === null) {
      return;
    }
    // set the first node as now being the next node, as the last node will be removed.
    const node = this.first;
    this.first = node.prev;

    // if at last, set the node before the last as the new last by setting current this.last as null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function main() {

  let starTrekQ = new Queue();
  let test = new Queue();
  
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Chekov');

  console.log(peek(starTrekQ));
  console.log(display(starTrekQ));
  console.log(isEmpty(test));

  starTrekQ.dequeue('Spock');
  starTrekQ.dequeue('Uhura');
  starTrekQ.dequeue('Sulu');
  starTrekQ.dequeue('Chekov');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Chekov');
  console.log(display(starTrekQ));
  
}

main();

// 6 continued

function peek(queue) {
  return queue.first.value;
}

function display(queue) {
  let currNode = queue.first;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.prev;
  }
}

function isEmpty(queue) {
  if (!queue.last || queue.last === null) {
    return 'queue is empty';
  }
}


