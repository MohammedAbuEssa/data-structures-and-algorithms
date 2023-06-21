"use strict";
const Node = require("./Node.js");
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }
  includes(value) {
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
  toStrin() {
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
  // addToHead(value) {
  //   let newNode = new Node(value);

  //   if (!this.head) {
  //     this.head = newNode;
  //   } else {
  //     newNode.next = this.head;
  //     this.head = newNode;
  //   }
  // }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      throw new Error("Empty List");
    } else if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (!current.next) {
        throw new Error("Node not found in the list.");
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      throw new Error("The list is empty.");
    }
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (!current) {
      throw new Error("Value not found in the list.");
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  kthFromEnd(k) {
    if (k < 0) {
      return "Exception";
    }

    let first = this.head;
    let last = this.head;

    for (let i = 0; i < k; i++) {
      if (last === null) {
        return "Exception";
      }
      last = last.next;
    }

    while (last !== null && last.next !== null) {
      first = first.next;
      last = last.next;
    }

    return first !== null ? first.data : null;
  }
}
module.exports = LinkedList;
