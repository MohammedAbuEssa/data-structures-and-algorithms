"use strict";
const Stack = require("./Stack");
const Queue = require("./Queue");

let newStack = new Stack();

// Can successfully push onto a stack
newStack.push("10");

//Can successfully push multiple values onto a stack

newStack.push("20");
newStack.push("30");
newStack.push("40");

//Can successfully pop off the stack

newStack.pop();

//Can successfully empty a stack after multiple pops

newStack.pop();
newStack.pop();
newStack.pop();

//Can successfully peek the next item on the stack

newStack.push("40");
newStack.peek();

//Can successfully instantiate an empty stack

newStack.isEmpty();

//Calling pop or peek on empty stack raises exception

newStack.pop();
newStack.pop();

//__________________

let newQueue = new Queue();

// Can successfully enqueue into a queue

newQueue.enqueue("10");

// Can successfully enqueue multiple values into a queue

newQueue.enqueue("20");
newQueue.enqueue("30");

// Can successfully dequeue out of a queue the expected value

newQueue.dequeue();

// Can successfully peek into a queue, seeing the expected value

newQueue.peek();

// Can successfully empty a queue after multiple dequeues

newQueue.dequeue();
newQueue.dequeue();

// Can successfully instantiate an empty queue

newQueue.isEmpty();

// Calling dequeue or peek on empty queue raises exception

newQueue.dequeue();
