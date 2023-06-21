# Implementation: linked-list-kth

## **Whiteboard Process**

![White-Borad](../../image/Screenshot%202023-06-21%20234518.png)

[White Board Link](https://alqudscollege-my.sharepoint.com/:wb:/g/personal/23037632_student_ltuc_com/EeuPEO40u1hEsiQRGHn__skBbDx_4r1qLy3PAOCvuyLrDg?e=aPlmOV)

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
```
