// Parameter Decorators
// These are the most specific. 
// They go inside the parentheses of a function, right next to an argument.

// Parameters:
// -- 1. target: The class prototype.
// -- 2. propertyKey: The name of the method the parameter belongs to.
// -- 3. index: The position of the parameter (0 for first, 1 for second, etc.).

function Required(target: any, key: string, index: number) {
  console.log(`The parameter at index ${index} in method ${key} is required.`);
}

class Api {
  updateUser(@Required id: number, name: string) {
    // index is 0 because 'id' is the first parameter
  }
}
