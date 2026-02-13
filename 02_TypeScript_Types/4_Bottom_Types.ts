// ============================================================
// 1. The "Endless" Function
// A function returns never if it literally cannot reach its closing brace. This usually happens in two scenarios:

// It throws an error (breaking the execution flow).
function throwError(message: string): never {
  throw new Error(message); // The function stops here and never "returns"
}

// It contains an infinite loop.
function keepRunning(): never {
  while (true) {
    console.log("I am looping forever...");
  }
}

// ============================================================
// 2. Exhaustive Type Checking (The Pro Move)
// The most powerful use of never is ensuring you've handled every possible case in a switch or if/else block. This is called Exhaustiveness Checking.
// Imagine you have an Enum for Shape:
enum Shape { Circle, Square, Triangle }

function getArea(shape: Shape) {
  switch (shape) {
    case Shape.Circle:
      return Math.PI * 5 ** 2;
    case Shape.Square:
      return 25;
    default:
      // If we handled Circle and Square, but forgot Triangle...
      // 'shape' here will be of type 'Triangle'
      const _exhaustiveCheck: never = shape; 
      // ❌ Error: Type 'Shape.Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}
// By assigning the default case to a variable of type never, TypeScript will scream at you if you add a new shape to the Enum but forget to update your logic. It’s an automated "to-do" list for your code.

// ============================================================
// When will you see it automatically?
// You might see never pop up in your editor when you use Type Narrowing incorrectly:
const name: string = "Alex";

if (typeof name === "number") {
  name; // In this block, 'name' is type 'never' 
        // because a string can't be a number.
}
