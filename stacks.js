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

function main() {
  let starTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  console.log(JSON.stringify(starTrek, null, 2));
}

main();

// 2. useful methods for stack
// peek() - display top of the stack
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
// Remove McCoy from your stack and display the stack



// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if
// you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. 
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
// Use the following template as a starting point.

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Your code goes here
}

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

// 