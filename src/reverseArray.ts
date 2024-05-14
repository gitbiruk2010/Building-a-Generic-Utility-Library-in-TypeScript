/**
 * Reverses the elements in an array.
 * @param arr - The array to be reversed.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
  
  export default reverseArray;
  