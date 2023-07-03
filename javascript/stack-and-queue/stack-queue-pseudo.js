const Node = require("./Node");
const Stack = require("./Stack");

class PseudoQueue {
  constructor() {
    this.Stack1 = new Stack();
    this.Stack2 = new Stack();
  }
  enqueue(value) {
    this.Stack1.push(value);
  }

  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error("Empty");
    }

    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
