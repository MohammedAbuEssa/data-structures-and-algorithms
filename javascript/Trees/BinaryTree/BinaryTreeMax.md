# Challenge Title : Tree Max

# Whiteboard Process

### Binary Tree

[Whiteboard Link](https://alqudscollege-my.sharepoint.com/:wb:/g/personal/23037632_student_ltuc_com/EScZJ_wFEatOmrJeBKkIZlcBvx3xMQqiCJ4h5A1D_QNDjA?e=r7fKce)

![Binar Tree](../../../image/Tree%20max.png)

---

# Solution

```javascript
treeMax() {
    let maxValue = 0;

    let traverse = (node) => {
      if (!this.root) {
        return null;
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return maxValue;
  }

```
