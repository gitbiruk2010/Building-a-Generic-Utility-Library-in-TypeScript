// filterArray.ts
/**
 * Filters elements of an array based on a predicate function.
 * @param arr - The array to be filtered.
 * @param predicate - The predicate function to filter the elements.
 * @returns A new array with the filtered elements.
 */
export function filterArray<T>(arr: T[], predicate: (value: T) => boolean): T[] {
    // Type guard to handle empty arrays and missing predicate function
    if (!arr || !predicate) {
      return arr;
    }
  
    const filteredArr = arr.filter(predicate);
    return filteredArr;
}

// Test case to filter fruits based on length >= 6
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const filteredFruits = filterArray(fruits, (word) => word.length >= 6);

