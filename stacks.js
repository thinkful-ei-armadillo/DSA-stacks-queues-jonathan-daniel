'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well. 
// Then write a Stack class with its core functions (push, pop) from scratch.

class Stack {
  constructor() {
    this.top = null;
  }

  // push new nodes into the stack
  push(data) {
    // if the stack is empty, the new node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    // if the stack already has something in it, 
    // then create a new node with data and set it as the new top 
    const node = new _Node(data, this.top);
    this.top = node;
  }
  // pop nodes off the top of the stack
  pop() {
    // to remove the top item, simply reassign the 'top' to the next item in the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }



}