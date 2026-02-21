// Type_Inference
// Type Inference is TypeScript's ability to "guess" the type of a variable based on the value you assign to it.
// It’s the reason you don't have to write : string or : number on every single line of your code.

let version1 = 25; // TypeScript "infers" that this is a number.

// You don't need to do this:
let version2: number = 25; // This is redundant (extra work).
