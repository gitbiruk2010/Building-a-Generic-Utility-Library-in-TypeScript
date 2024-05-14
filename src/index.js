"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = require("./identity");
var reverseArray_1 = require("./reverseArray");
var mapObject_1 = require("./mapObject");
var filterArray_1 = require("./filterArray");
// Test cases for identity function
console.log((0, identity_1.default)(1)); // Output: 1
console.log((0, identity_1.default)("hello")); // Output: "hello"
// Test cases for reverseArray function
console.log((0, reverseArray_1.default)([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log((0, reverseArray_1.default)(["apple", "banana", "cherry"])); // Output: ["cherry", "banana", "apple"]
// Test cases for mapObject function
console.log((0, mapObject_1.default)({ a: 1, b: 2, c: 3 }, function (x) { return x.toString(); })); // Output: { a: "1", b: "2", c: "3" }
console.log((0, mapObject_1.default)({ john: { age: 30 }, jane: { age: 25 } }, function (person) { return person.age.toString(); })); // Output: { john: "30", jane: "25" }
// Test cases for filterArray function
console.log((0, filterArray_1.default)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (x) { return x % 2 === 0; })); // Output: [2, 4, 6, 8, 10]
console.log((0, filterArray_1.default)(["apple", "banana", "cherry", "date", "elderberry"], function (word) { return word.length > 6; })); // Output: ["banana", "elderberry"]
