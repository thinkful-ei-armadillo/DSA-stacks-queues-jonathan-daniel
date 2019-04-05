'use strict';
// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value=value,
    this.next=null;
  }
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
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

// refactor for double linked list that is queue
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
