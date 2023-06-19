# Implementation: Append & Insert Before & Insert After

## **Whiteboard Process**

![White-Borad](../../image/Screenshot%202023-06-19%20161513.png)

[White Board Link](https://alqudscollege-my.sharepoint.com/:wb:/g/personal/23037632_student_ltuc_com/EbMYU-q_BXhHoB_l7g029Z0BBs_KUcG72huw9ooLR3Dyig?e=rCdFke)

## **Approach & Efficiency**

## **Solution**

### Node Class Code :

```javascript
"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
module.exports = Node;
```

### LinkedList Class Code :

```javascript
"use strict";
const Node = require("./Node.js");
class LinkedList {
  constructor() {
    this.head = null;
  }
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
}
module.exports = LinkedList;
```
