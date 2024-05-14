"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Maps the values of an object using a provided mapping function.
 * @param obj - The object to be mapped.
 * @param mapFn - The mapping function to apply to each value.
 * @returns A new object with the same keys but mapped values.
 */
function mapObject(obj, mapFn) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
exports.default = mapObject;
