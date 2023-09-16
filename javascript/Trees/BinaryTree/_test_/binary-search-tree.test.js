const BinarySearchTree = require("../BinarySearchTree");

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("add", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);

    expect(bst.root.value).toBe(10);

    expect(bst.root.left.value).toBe(5);
    expect(bst.root.left.left.value).toBe(3);

    expect(bst.root.right.value).toBe(15);
  });

  it("contains() should return true", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);

    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(15)).toBe(true);
    expect(bst.contains(3)).toBe(true);
  });

  it("contains() should return false", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);

    expect(bst.contains(8)).toBe(false);
    expect(bst.contains(20)).toBe(false);
    expect(bst.contains(1)).toBe(false);
    expect(bst.contains(12)).toBe(false);
  });
});
