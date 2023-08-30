"use stricrt";

const Hashmap = require("../Hash-Map/HashMap");
const BinaryTree = require("../Trees/Binary Tree/BinaryTree");
const Node = require("../Trees/Binary Tree/Node");

function treeIntersection(tree1, tree2) {
  const valuesMap = new Hashmap(50); 
  const result = new Set();

  function traverseTree(node) {
    if (!node) {
      return;
    }

    valuesMap.add(node.value.toString(), true);
    traverseTree(node.left);
    traverseTree(node.right);
  }

  traverseTree(tree1.root);

  function findCommonValues(node) {
    if (!node) {
      return;
    }

    if (valuesMap.has(node.value.toString())) {
      result.add(node.value);
    }

    findCommonValues(node.left);
    findCommonValues(node.right);
  }

  findCommonValues(tree2.root);

  return result;
}

let one = new Node(150);
let two = new Node(100);
let three = new Node(250);
let four = new Node(75);
let five = new Node(160);
let six = new Node(125);
let seven = new Node(175);
let eight = new Node(200);
let nine = new Node(350);
let ten = new Node(300);
let eleven = new Node(500);
one.left = two;
one.right = three;

two.left = four;
two.right = five;

five.left = six;
five.right = seven;

three.left = eight;
three.right = nine;

nine.left = ten;
nine.right = eleven;

let tree1 = new BinaryTree(one);

let onea = new Node(42);
let twoa = new Node(100);
let threea = new Node(600);
let foura = new Node(15);
let fivea = new Node(160);
let sixa = new Node(125);
let sevena = new Node(175);
let eighta = new Node(200);
let ninea = new Node(350);
let tena = new Node(4);
let elevena = new Node(500);
onea.left = twoa;
onea.right = threea;

twoa.left = foura;
twoa.right = fivea;

fivea.left = sixa;
fivea.right = sevena;

threea.left = eighta;
threea.right = ninea;

ninea.left = tena;
ninea.right = elevena;

let tree2 = new BinaryTree(onea);

console.log(treeIntersection(tree1, tree2));
