// Type_Predicates
// A Type Predicate allows you to create a function that performs a check and force-narrows the type in the calling code.

// ============================================================
// 1. The Syntax: parameterName is Type
// Instead of returning a simple boolean, your function return type is a "Predicate."

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// The return type 'pet is Fish' is the Type Predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// ============================================================
// 2. Why do we need this?
// Normally, if a function returns a boolean, TypeScript just sees a true or false. It doesn't connect that "true" to a specific type.

// Without Predicate:
function check1(pet: Fish | Bird) {
  if (isFish(pet)) {
    // pet.swim(); // ❌ ERROR: TS doesn't know 'true' means it's a Fish.
  }
}

// With Predicate:
function check2(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // ✅ SUCCESS: TS trusts your 'pet is Fish' return.
  }
}

// ============================================================
// 3. Real-World Backend Case: Filtering Arrays
// This is where Type Predicates are most powerful. 
// Imagine you have a list of items from your database, and some are null or undefined. 
// You want to filter them out and have a "clean" array.

const results = ["admin", "editor", null, "viewer"];

// Simple filter doesn't change the type:
// const clean = results.filter(x => x !== null); // Type is still (string | null)[]

// Using a Type Predicate:
function isNotNull<T>(val: T | null): val is T {
  return val !== null;
}

const clean = results.filter(isNotNull); // Type is now: string[] 🚀



