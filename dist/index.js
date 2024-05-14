"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing modules and libraries
const identity_1 = __importDefault(require("./identity"));
const reverseArray_1 = __importDefault(require("./reverseArray"));
const mapObject_1 = __importDefault(require("./mapObject"));
const filterArray_1 = require("./filterArray");
// Test cases for identity function
// console.log(identity<number>(1)); // Output: 1
console.log((0, identity_1.default)("Building a Generic Utility Library in TypeScript")); // Output: "Building a Generic Utility Library in TypeScript"
// Test cases for reverseArray function
console.log((0, reverseArray_1.default)([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log((0, reverseArray_1.default)(["apple", "banana", "cherry"])); // Output: ["cherry", "banana", "apple"]
// Test cases for mapObject function
console.log((0, mapObject_1.default)({ a: 1, b: 2, c: 3 }, (x) => x.toString())); // Output: { a: "1", b: "2", c: "3" }
console.log((0, mapObject_1.default)({ Miller: { age: 30 }, Costa: { age: 25 } }, (person) => person.age.toString())); // Output: { Miller: "30", Costa: "25" }
// Test cases for filterArray function
console.log((0, filterArray_1.filterArray)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x % 2 === 0)); // Output: [2, 4, 6, 8, 10]
console.log((0, filterArray_1.filterArray)(["apple", "banana", "cherry", "date", "elderberry"], (word) => word.length >= 6)); // Output: ["banana", "cherry", "elderberry"]
