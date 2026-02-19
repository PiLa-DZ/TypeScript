// The Basic Concept: The "Identity" Function
// Without generics, if you want a function that returns whatever you give it, you'd have to use any (unsafe) or hardcode types.

// With Generics: <T> captures the type
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>("Arch Linux"); // output is type 'string'
const num = identity(10); // TS infers <number> automatically

console.log(output) // Arch Linux
console.log(num)    // 10
