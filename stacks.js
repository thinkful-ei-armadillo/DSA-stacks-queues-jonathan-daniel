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
  //console.log(peek(starTrek));
  
  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');
  //console.log(display(starTrek));

}

main();

// 2. useful methods for stack
// peek() - display top of the stack
// isEmpty(): allows you to check if the stack is empty or not
// display(): to display the stack - what is the 1st item in your stack?
// Remove McCoy from your stack and display the stack
function peek(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  } 
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
}

function display(stack) {
  return JSON.stringify(stack, null, 2);
}


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
  const tStack = new Stack();
  let reverseString = '';
  for (let i = 0; i < s.length; i++) {
    tStack.push(s[i]);
  }
  while (tStack.top !== null) {
    reverseString += tStack.pop();
  }
  return reverseString === s;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// 

// 4. Matching parentheses in an expression

//  || str[i] === '[' || str[i] === '{' || str[i] === `"` || str[i] === `'`
//  || str[i] === '[' || str[i] === '{' || str[i] === '"' || str[i] === `'`

function checkBracks(str){
  const testStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    // console.log('loop');
    if (str[i] === '(') {
      testStack.push(str[i]);
    }
  }
  console.log(JSON.stringify(testStack, null, 2));
  let j = 0;
  while (j < str.length) {
    if (str[j] === ')') {
      testStack.pop();
    }
    j++;
  }

  console.log(JSON.stringify(testStack, null, 2));

  if (testStack.top === null) {
    return true;
  } else {
    return false;
  }
}

console.log(checkBracks('(([]))'));

function checkThisStack(stack, targetStack, currentNode) {
  let nextNode = peek(stack);

  if (nextNode === null || nextNode <= currentNode) {
    targetStack.push(currentNode);
  }
  else {
    stack.push(targetStack.pop());
    checkThisStack(stack, targetStack, currentNode);
  }
}


function sortStack(stack) {
  let workingStack = new Stack();
  let currNode;
  console.log(JSON.stringify(stack, null, 2));
  while (stack.top !== null) {
    currNode = stack.pop();
    checkThisStack(stack, workingStack, currNode);
  }
  console.log(JSON.stringify(stack, null, 2));
  while (workingStack.top !== null) {
    stack.push(workingStack.pop());  
  }

  return stack;
}

let test = new Stack();
test.push(1);
test.push(4);
test.push(6);
test.push(9);
test.push(3);

console.log(sortStack(test));