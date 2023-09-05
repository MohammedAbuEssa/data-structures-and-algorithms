"use strict";

const Hashmap = require("../Hash-Map/HashMap");

function hashMapLeftJoin(synonym, antonyms) {
  let result = [];

  synonym.forEach((value, key) => {
    let entry = [key, value];
    antonyms.get(key) ? entry.push(antonyms.get(key)) : entry.push(null);

    result.push(entry);
  });

  return result;
}

module.exports = hashMapLeftJoin;
