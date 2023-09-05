"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  makeHash(key) {
    const asciiCodeSum = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  add(key, value) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].append({ [key]: value });
  }

  set(key, value) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let current = this.map[hash].head;
    while (current) {
      if (current.value.hasOwnProperty(key)) {
        current.value[key] = value;
        return;
      }
      current = current.next;
    }

    this.map[hash].append({ [key]: value });
  }

  get(key) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      return undefined;
    }

    let current = this.map[hash].head;
    while (current) {
      if (current.value.hasOwnProperty(key)) {
        return current.value[key];
      }
      current = current.next;
    }

    return undefined;
  }

  has(key) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      return false;
    }

    let current = this.map[hash].head;
    while (current) {
      if (current.value.hasOwnProperty(key)) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  keys() {
    const allKeys = [];
    this.map.forEach((bucket) => {
      let current = bucket.head;
      while (current) {
        const key = Object.keys(current.value)[0];
        allKeys.push(key);
        current = current.next;
      }
    });
    return allKeys;
  }

  hash(key) {
    return this.makeHash(key);
  }


}

module.exports = Hashmap;

