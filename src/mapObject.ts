/**
 * Maps the values of an object using a provided mapping function.
 * @param obj - The object to be mapped.
 * @param mapFn - The mapping function to apply to each value.
 * @returns A new object with the same keys but mapped values.
 */
function mapObject<K extends string | number | symbol, V, U>(
    obj: Record<K, V>,
    mapFn: (value: V) => U
  ): Record<K, U> {
    const result: Record<K, U> = {} as Record<K, U>;
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = mapFn(obj[key]);
      }
    }
  
    return result;
  }
  
  export default mapObject;
  