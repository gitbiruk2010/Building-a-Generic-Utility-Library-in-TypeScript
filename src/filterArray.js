"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filters elements of an array based on a predicate function.
 * @param arr - The array to be filtered.
 * @param predicate - The predicate function to filter the elements.
 * @returns A new array with the filtered elements.
 */
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
exports.default = filterArray;
