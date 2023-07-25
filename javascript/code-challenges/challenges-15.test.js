"use strict";

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named screenForNames that takes in an array of strings and uses Regex to create a new array of only those strings that match the following rules:

* the name must begin with Mr., Mrs., Ms., Dr. followed by a space
* the name must contain only letter characters (white spaces are ok)

------------------------------------------------------------------------------------------------ */

const screenForNames = (arr) => {
  // Solution code here...
  // let regexNames = /^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*[A-Za-z\s]+$/;
  let regexNames = /^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+[A-Za-z]+$/;
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (regexNames.test(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

const toTitleCase = (arr) => {
  // Solution code here...
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let newString = arr[i];
    results.push(newString.charAt(0).toUpperCase() + newString.slice(1));
    // for (let j = 0; j < newString.length; j++) {

    //   if (newString[0]) {

    //   }
  }
  return results;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

let starWarsData = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Pex Kylar",
    height: "180",
    mass: "190",
    hair_color: "orange",
    skin_color: "brown",
    eye_color: "none",
    birth_year: "27BBY",
    gender: "n/a",
  },
];

let biggerThanLuke = (arr) => {
  // Solution code here...
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    if (Number.parseInt(arr[i].mass) > 77) {
      newString = newString.concat(arr[i].name, " - ");
    }
  }
  newString = newString.slice(0, -3);
  return newString;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

const sortBy = (property, arr) => {
  // Solution code here...
  const compareFn = (a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  };
  arr.sort(compareFn);
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */
const isSecure = (url) => {
  // Solution code here...
  if (!url.startsWith("https://")) {
    return false;
  }
  return true;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */
const helpCheck = (row1, col1, row2, col2, row3, col3, board) => {
  const value1 = board[row1][col1];
  const value2 = board[row2][col2];
  const value3 = board[row3][col3];
  return value1 === value2 && value2 === value3 && value1 !== "";
};

const detectTicTacToeWin = (board) => {
  // Solution code here...
  for (let i = 0; i < 3; i++) {
    if (helpCheck(i, 0, i, 1, i, 2, board)) {
      return true;
    }
  }

  for (let j = 0; j < 3; j++) {
    if (helpCheck(0, j, 1, j, 2, j, board)) {
      return true;
    }
  }
  if (
    helpCheck(0, 0, 1, 1, 2, 2, board) ||
    helpCheck(0, 2, 1, 1, 2, 0, board)
  ) {
    return true;
  }

  return false;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenge-14.test.js

------------------------------------------------------------------------------------------------ */

describe("Testing challenge 1", () => {
  test("It should return a list of names", () => {
    const names = [
      "Mr. Brown",
      " Ms. Red",
      "Dr. Blue",
      "Mrs.",
      "",
      "Ms. Black",
      "dr. Green",
      "Mrs. Orange",
      "Purple",
    ];
    expect(screenForNames(names)).toStrictEqual([
      "Mr. Brown",
      "Dr. Blue",
      "Ms. Black",
      "Mrs. Orange",
    ]);
  });
});

describe("Testing challenge 2", () => {
  test("It should convert each word to title case", () => {
    const words = ["apple", "banana", "MacGyver"];
    expect(toTitleCase(words)).toStrictEqual(["Apple", "Banana", "MacGyver"]);

    expect(toTitleCase([])).toStrictEqual([]);
  });
});

describe("Testing challenge 3", () => {
  test("It should return only characters that are bigger than Luke", () => {
    expect(biggerThanLuke(starWarsData)).toStrictEqual(
      "Darth Vader - Pex Kylar"
    );
    expect(biggerThanLuke([])).toStrictEqual("");
  });
});

describe("Testing challenge 4", () => {
  test("It should sort items by a price", () => {
    expect(
      sortBy("price", [
        { name: "Sweatshirt", price: 45 },
        { name: "Bookmark", price: 2.5 },
        { name: "Tote bag", price: 15 },
      ])
    ).toStrictEqual([
      { name: "Bookmark", price: 2.5 },
      { name: "Tote bag", price: 15 },
      { name: "Sweatshirt", price: 45 },
    ]);
  });

  test("It should sort items by name", () => {
    expect(
      sortBy("name", [
        { name: "Sweatshirt", price: 45 },
        { name: "Bookmark", price: 2.5 },
        { name: "Tote bag", price: 15 },
      ])
    ).toStrictEqual([
      { name: "Bookmark", price: 2.5 },
      { name: "Sweatshirt", price: 45 },
      { name: "Tote bag", price: 15 },
    ]);
  });
});

describe("Testing challenge 5", () => {
  test("It should check if url is https", () => {
    expect(isSecure("http://www.insecure.com")).toBe(false);
    expect(isSecure("https://secure.com")).toBe(true);
    expect(isSecure("https:/missingslash.org")).toBe(false);
  });
});

describe("Testing challenge 6", () => {
  test("It should return true if there are three in a row", () => {
    expect(
      detectTicTacToeWin([
        ["X", "", "O"],
        ["X", "O", ""],
        ["X", "O", "X"],
      ])
    ).toStrictEqual(true);
    expect(
      detectTicTacToeWin([
        ["O", "", "X"],
        ["X", "O", "X"],
        ["X", "", "O"],
      ])
    ).toStrictEqual(true);
  });

  test("It should return false if there are not three in a row", () => {
    expect(
      detectTicTacToeWin([
        ["X", "", "O"],
        ["O", "O", ""],
        ["X", "O", "X"],
      ])
    ).toStrictEqual(false);
  });

  test("It should not treat empty 3 in row as winner", () => {
    expect(
      detectTicTacToeWin([
        ["", "", ""],
        ["O", "O", ""],
        ["X", "O", "X"],
      ])
    ).toEqual(false);
  });
});
