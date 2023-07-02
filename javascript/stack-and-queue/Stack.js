"use strict";

const Node = require("./Node.js");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty) {
      this.top = newNode;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length++;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log("empty stack");
      return false;
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return "sorry stack is empty";
    }
    return this.top.value;
  }
}

module.exports = Stack;
