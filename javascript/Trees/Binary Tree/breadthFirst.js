const queue = require("../../stack-and-queue/Queue");

function breadthFirst(tree) {
  let result = [];
  if (!tree || !tree.root) {
    return result;
  }
  let newQueue = new queue();
  newQueue.enqueue(tree.root);

  while (!newQueue.isEmpty()) {
    let front = newQueue.dequeue();
    result.push(front.value);
    if (front.left) {
      newQueue.enqueue(front.left);
    }
    if (front.right) {
      newQueue.enqueue(front.right);
    }
  }

  return result;
}

module.exports = breadthFirst;
