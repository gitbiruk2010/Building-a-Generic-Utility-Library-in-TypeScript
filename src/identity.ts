/**
 * A generic identity function that takes an argument of type T and returns a value of type T.
 * @param value - The value to be returned.
 * @returns The input value.
 */
function identity<T>(value: T): T {
    return value;
  }
  
  export default identity;
  