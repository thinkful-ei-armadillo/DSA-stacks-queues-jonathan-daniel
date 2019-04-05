/* eslint-disable quotes */
const Stack = require('./stacks');
'use strict';
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;    
  }
}

class StackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(data) {
    this.stack1.push(data);
  }

  dequeue() {
    let currentNode;
    let result;
    while (this.stack1.top !== null) {
      currentNode = this.stack1.pop();
      if (currentNode) {
        this.stack2.push(currentNode);
        console.log(JSON.stringify(this.stack2, null, 2));
      }
    }
    result = this.stack2.pop();
    while (this.stack2.top !== null) {
      this.stack1.push(this.stack2.pop());
    }
    return `removed ${result}`;
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

const dancerArrives = (dancer, queue) => {
  const { name, gender } = dancer;
  const queuedDancer = peek(queue);
  if (queuedDancer === null || gender === queuedDancer.gender) {
    queue.enqueue(dancer);
  } else {
    queue.dequeue();
    
    console.log(
      `${gender} dancer is: ${name} and the ${queuedDancer.gender} is: ${
        queuedDancer.name
      }`
      
    );
  }
};

const squareDance = () => {
  const dancers = new Queue();
  dancers.enqueue({ name: "Jane", gender: "female" });
  dancers.enqueue({ name: "Frank", gender: "male" });
  dancers.enqueue({ name: "John", gender: "male" });
  dancers.enqueue({ name: "Sherlock", gender: "male" });
  dancers.enqueue({ name: "Madonna", gender: "female" });
  dancers.enqueue({ name: "David", gender: "male" });
  dancers.enqueue({ name: "Christopher", gender: "male" });
  dancers.enqueue({ name: "Beyonce", gender: "female" });
  dancerArrives({ name: "Jane", gender: "female" }, dancers);
  dancerArrives({ name: "Frank", gender: "male" }, dancers);
  dancerArrives({ name: "John", gender: "male" }, dancers);
  dancerArrives({ name: "Sherlock", gender: "male" }, dancers);
  dancerArrives({ name: "Madonna", gender: "female" }, dancers);
  dancerArrives({ name: "David", gender: "male" }, dancers);
  dancerArrives({ name: "Christopher", gender: "male" }, dancers);
  dancerArrives({ name: "Beyonce", gender: "female" }, dancers);

  let num = 0;
  let gender;
  while (dancers.first !== null) {
    num++;
    gender = peek(dancers).gender;
    dancers.dequeue();
  }
  console.log(JSON.stringify(dancers));
  return `There are ${num} ${gender} dancers waiting to dance`;
};

function bankLine() {
  let bankQ = new Queue();
  
  const badPaperwork = () => {
    const randomChance = Math.random();
    if (randomChance <= 0.25) {
      return true;
    }
    return false;
  };
  let line = '';

  for (let i = 0; i < 10; i++) {
    bankQ.enqueue(`customer ${i+1}`);
    if (bankQ.last !== null) {
      line += `${ bankQ.last.value }, `;
    }
  }
  
  while (bankQ.last !== null) {
    if (badPaperwork()) {
      console.log(line);
      bankQ.enqueue(bankQ.dequeue());
      line = line.replace(`${bankQ.last.value}, `, '');
      line += `${bankQ.last.value}, `;
    } else {
      console.log(line);
      let result = bankQ.dequeue();
      line = line.replace(`${result}, `, '');
    }
  }
}



function main() {

  let starTrekQ = new Queue();
  let danceQ = new Queue();
  
  danceQ.enqueue("F Jane");
  danceQ.enqueue("M Frank");
  danceQ.enqueue("M John");
  danceQ.enqueue("M Sherlock");
  danceQ.enqueue("F Madonna");
  danceQ.enqueue("M David");
  danceQ.enqueue("M Christopher");
  danceQ.enqueue("F Beyonce");

 /*  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Chekov'); */

 /*  console.log(peek(starTrekQ));
  console.log(display(starTrekQ));
  console.log(isEmpty(test)); */

 /*  starTrekQ.dequeue('Spock');
  starTrekQ.dequeue('Uhura');
  starTrekQ.dequeue('Sulu');
  starTrekQ.dequeue('Chekov');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Chekov'); */
  //console.log(JSON.stringify(starTrekQ));
  //console.log(peek(starTrekQ));
  //twoStackImplementation();
  //console.log(squareDance());
  bankLine();
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

function twoStackImplementation() {
  let stackQ = new StackQueue();
  stackQ.enqueue('Spock');
  stackQ.enqueue('Uhura');
  stackQ.enqueue('Sulu');
  stackQ.enqueue('Chekov');
  stackQ.enqueue('Spock');
  stackQ.enqueue('Uhura');
  stackQ.dequeue();
  stackQ.dequeue();
  stackQ.dequeue();
  console.log(stackQ.dequeue());
  console.log(JSON.stringify(stackQ, null, 2));
}