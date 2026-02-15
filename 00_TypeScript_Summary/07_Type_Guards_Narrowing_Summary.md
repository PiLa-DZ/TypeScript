```TS
// instanceof_operator
console.log(me instanceof User); // true
console.log(me instanceof Array); // false

// typeof_Operator
let port = 3306;
console.log(typeof port);     // Prints: "number"

// Equality_Narrowing
function checkValues(x: string | number, y: string | boolean) {
  if (x === y) { ... }
}

// Truthiness_Narrowing
function printUsername(name: string | null | undefined) {
  if (name) { ... } // Narrowed: name is definitely a 'string'
}

// Type_Predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };
// The return type 'pet is Fish' is the Type Predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```
