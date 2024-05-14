"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArray = void 0;
// filterArray.ts
/**
 * Filters elements of an array based on a predicate function.
 * @param arr - The array to be filtered.
 * @param predicate - The predicate function to filter the elements.
 * @returns A new array with the filtered elements.
 */
function filterArray(arr, predicate) {
    // Type guard to handle empty arrays and missing predicate function
    if (!arr || !predicate) {
        return arr;
    }
    const filteredArr = arr.filter(predicate);
    return filteredArr;
}
exports.filterArray = filterArray;
// Test case to filter fruits based on length >= 6
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const filteredFruits = filterArray(fruits, (word) => word.length >= 6);
console.log(filteredFruits); // Expected Output: ["banana", "cherry", "elderberry"]
