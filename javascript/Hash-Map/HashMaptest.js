const Hashmap = require("./HashMap");

const myHashmap = new Hashmap(10);

myHashmap.set("esam", "401d15 student");
myHashmap.set("ahmad", "401d15 student");
myHashmap.set("mohamad", "401d15 student");
myHashmap.set("samah", "401d15 student");
myHashmap.set("laith", "401d15 student");
myHashmap.set("shihab", "401d15 student");

console.log(myHashmap.get("ahmad")); // Output: 401d15 student
console.log(myHashmap.get("john")); // Output: undefined
console.log(myHashmap.has("mohamad")); // Output: true
console.log(myHashmap.has("john")); // Output: false
console.log(myHashmap.keys()); // Output: [ 'esam', 'samah', 'ahmad', 'laith', 'mohamad', 'shihab' ]
console.log(myHashmap.hash("laith")); // Output: A number within the size of the hashmap
console.log(myHashmap.hash("john")); // Output: A number within the size of the hashmap
