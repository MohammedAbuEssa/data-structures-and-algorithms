const insertionSort = require("./MergeSort");

describe("merge sort test", () => {
  test("test [20,18,12,8,5,-2]", () => {
    const arr = [20, 18, 12, 8, 5, -2];
    const result = mergeSort(arr);
    expect(result).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  test("test [5,12,7,5,5,7]", () => {
    const arr = [5, 12, 7, 5, 5, 7];
    const result = mergeSort(arr);
    expect(result).toEqual([5, 5, 5, 7, 7, 12]);
  });
  test("test [2,3,5,7,13,11]", () => {
    const arr = [2, 3, 5, 7, 13, 11];
    const result = mergeSort(arr);
    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
