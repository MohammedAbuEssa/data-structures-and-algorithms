/* ------------------------------------------------------------------------------------------------

CHALLENGE 6

Write a function named createList that takes in an array of the current store inventory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */

// function createList(arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element.available === true) {
//       newArr.push(element.name);
//     }
//   });
//   return newArr;
// }

// console.log(
//   createList([
//     { name: "apples", available: true },
//     { name: "pears", available: true },
//     { name: "oranges", available: false },
//     { name: "bananas", available: true },
//     { name: "blueberries", available: false },
//   ])
// );

/* ------------------------------------------------------------------------------------------------
STRETCH - CHALLENGE 7

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */

// function fizzbuzz(arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element % 3 === 0 && element % 5 === 0) {
//       newArr.push("Fizz Buzz");
//     } else if (element % 5 === 0) {
//       newArr.push("Buzz");
//     } else if (element % 3 === 0) {
//       newArr.push("Fizz");
//     } else {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }

// console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function called addTwo that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.
------------------------------------------------------------------------------------------------ */

// function addTwo(arr) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     newArr.push(arr[index] + 2);
//   }
//   return newArr;
// }

// console.log(addTwo([1, 2, 4]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.

For example, typeNum([1, 'bob' ,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

// function typeNum(arr) {
//   let newArr = arr.filter((elemnt) => Number.isInteger(elemnt));
//   return newArr;
// }

// console.log(typeNum(["AbuEssa", 5, "Mohammad", 10]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.

For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
-----------------------------------*/

// function containsAnd(arr) {
//   let newArr = arr.filter((str) => str.includes("and"));
//   return newArr;
// }

// console.log(containsAnd(["and", "sand", "Mohammad"]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

// function oddValues(arr) {
//   let newArr = arr.filter((int) => int % 2 > 0);
//   return newArr;
// }

// console.log(oddValues([1, 2, 3, 4, 5, 6]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

// function notInFirstArray(arr1, arr2) {
//   let newArr = arr2.filter((arr) => !arr1.includes(arr));
//   return newArr;
// }

// console.log(notInFirstArray([1, 2, 3, 4, 5], [1, 2, 4, 6]));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.

For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */
const snorlaxData = {
  stats: [
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/6/",
        name: "speed",
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/5/",
        name: "special-defense",
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: "https://pokeapi.co/api/v2/stat/4/",
        name: "special-attack",
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: "snorlax",
  weight: 4600,
};

function getBaseStatGreaterThan(snorlaxData, num) {
  let newArr = snorlaxData.stats.filter((obj) => obj.baseStat > num);
  return newArr;
}

// console.log(getBaseStatGreaterThan(snorlaxData, 50));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 6. For this function, extend your solution from challenge 6 to only return the name of the stat, rather than the entire stat object.

For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

// function getStatName(snorlaxData, num) {
//   let newArr = snorlaxData.stats.filter((obj) => obj.baseStat > num);
//   let names = newArr.map((name) => name.stat.name);
//   return names;
// }

// console.log(getStatName(snorlaxData, 50));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */

function getCourseKeys(obj) {
  return Object.keys(obj);
}

const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

console.log(getCourseKeys(courseInfo));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.

For example:
{
  name: 'bob',
  age: 32
}

Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]
------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

function totalSum(arr) {
  let sum = arr.reduce((initial, current) => {
    return initial + current.map((arr2) => {});
  }, 0);
}

function search(value) {
  return _searchRecarsuve(this.root, value);
}

function _searchRecarsuve(node, value) {
  if (!node || node.value === value) {
    return node;
  }
  if (node.value < value) {
    return _searchRecarsuve(node.left, value);
  } else {
    _searchRecarsuve(node.right, value);
  }
}
