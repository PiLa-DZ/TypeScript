// Class Decorators
// A Class Decorator is applied to the top of a class. 
// It only gets one parameter: the Constructor (the class itself). 
// You use this to freeze a class or add new properties to every instance.

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
  console.log("Class is now frozen!");
}

@Frozen
class User {
  constructor(public name: string) {}
}
