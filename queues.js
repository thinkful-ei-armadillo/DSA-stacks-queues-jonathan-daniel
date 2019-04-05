'use strict';
class _Node {
  constructor(value) {
    this.value=value,
    this.next=null;
  }
}

class Queue {
  // set head and tail for linked list
  constructor() {
    this._first = null;
    this._last = null;
  }

  // adding method to add to the back of the linked list
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
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
    this.first = this.first.next;

    // if at last, set the node before the last as the new last by setting current this.last as null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function main() {

  let q = new Queue();
  q.enqueue('Tauhida');
  q.enqueue('Joe');
  q.enqueue('Tim');
  display(q);

  console.log(q.dequeue());
  display(q);
  q.enqueue('Alison');
  q.enqueue('Chris');
  console.log(q.dequeue());
  display(q);
}

main();

// may need to refactor for double linked list functionality
function display(ll) {
  let currentNode = ll.top;
  // if empty...
  if (!ll.top) {
    return null;
  }
  while(currentNode !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}
