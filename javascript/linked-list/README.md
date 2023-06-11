# Implementation: Singly Linked Lists

## **Whiteboard Process**

![White-Borad](../../image/Screenshot%202023-06-11%20104103.png)

## **Approach & Efficiency**

1. ### Data Structure:

- Linked lists are sequential data structures comprised of nodes. Each node holds a value and a reference (or link) to the following node in the list.
- The initial node is known as the head, while the final node is referred to as the tail. The tail node points to null, indicating the conclusion of the list.

2. ### Accessing Elements:

- In contrast to arrays, the efficiency of accessing elements in a linked list is not as high. To access a particular element, you must traverse the list starting from the head node and continue until you reach the desired node.
- The time complexity for accessing an element in a linked list is O(n), where n represents the number of nodes.

3. ### Insertion and Deletion :

- In linked lists, insertion and deletion operations can be efficient, particularly when adding or removing elements at the beginning or end of the list.
- When inserting a new node at the beginning (modifying the head) or removing the first node, the time complexity is constant, O(1).
- However, inserting or deleting nodes in the middle of the list necessitates traversing to the specific position, resulting in a time complexity of O(n), where n represents the number of nodes.

4. ### Memory Allocation:

- Linked lists offer dynamic memory allocation for each node, providing flexibility when it comes to adding or removing nodes.
- Nonetheless, compared to arrays, linked lists consume more memory since they need to store both the value and the reference to the next node.

5. ### Advantages and Disadvantages:

- Linked lists prove advantageous in scenarios involving frequent insertions or deletions, especially at the beginning or end of the list.
- They possess the ability to dynamically expand or contract as needed, eliminating the need for costly resizing operations.
- Nevertheless, linked lists exhibit slower access times compared to arrays and incur higher memory overhead due to the additional memory necessary for storing references.

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
```
