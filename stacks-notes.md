# Stacks and Queues notes

* Understand how stacks and queues operate
* Be able to implement each data structure
* Be able to utilize stacks and queues to solve problems

## Stacks
  **LIFO**
* Last in, first out
* all work done at the top of the stack
* like a stack of plates - you take the top plate, or add a new plate to the top
* Implementation: singly-linked list, pointer to top
* important part of low-level computing
  * the vars which you create in functions are stored in a stack
  * going out of scope === being removed from the stack
  * hence terms like 'stack overflow' from which the site took its name

## stack operations

* push: add something to the stack (becomes the new top)
* pop: remove the item at the top of the stack
* Both push and pop are O(1)


## Queues
  **FIFO**
* First-in, first-out
* Operations are done at both ends - the head and the tail
* Like a queue for food - you join the back of queue, and get food when you're at the front (like McDonald's)
* Implementation: doubly linked list - pointer to head and tail

## queue operations

* enqueue: add something to the **end** of the queue
* dequeue: remove something from the **front** of the queue
* both enqueue and dequeue are O(1)

