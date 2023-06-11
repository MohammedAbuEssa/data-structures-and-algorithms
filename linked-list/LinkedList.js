"use strict";
const Node = require("./Node.js");
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new Node(value);
    // this.counter++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    // this.tail=newNode
    return this;
  }
  includeIn(value) {
    if (value == this.head) {
      return true;
    }
    let current = this.head;
    while (current) {
      if (value == current.value) {
        return true;
      } else if (current.next == null) {
        return false;
      }
      current = current.next;
    }
    return false;
  }
  stringCasting() {
    let current = this.head;
    let linkedlistStr = '"';
    while (current) {
      if (current.next === null) {
        linkedlistStr += `{${current.value}}  -> NULL\"`;
        return linkedlistStr;
      }
      linkedlistStr += `{${current.value}} -> `;
      current = current.next;
    }
    return `"NULL"`;
  }
  addToHead(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}
module.exports = LinkedList;
