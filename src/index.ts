// importing modules and libraries
import identity from "./identity";
import reverseArray from "./reverseArray";
import mapObject from "./mapObject";
import {filterArray} from "./filterArray";

// Test cases for identity function
console.log(identity<number>(1)); // Output: 1
console.log(identity<string>("Building a Generic Utility Library in TypeScript")); // Output: "Building a Generic Utility Library in TypeScript"

// Test cases for reverseArray function
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(["apple", "banana", "cherry"])); // Output: ["cherry", "banana", "apple"]

// Test cases for mapObject function
console.log(mapObject({ a: 1, b: 2, c: 3 }, (x) => x.toString())); // Output: { a: "1", b: "2", c: "3" }
console.log(
  mapObject({ Miller: { age: 30 }, Costa: { age: 25 } }, (person) => person.age.toString())
); // Output: { Miller: "30", Costa: "25" }

// Test cases for filterArray function
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x: number) => x % 2 === 0)); // Output: [2, 4, 6, 8, 10]
console.log(filterArray(["apple", "banana", "cherry", "date", "elderberry"], (word: string) => word.length >= 6)); // Output: ["banana", "cherry", "elderberry"]
