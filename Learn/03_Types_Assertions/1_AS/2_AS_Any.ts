// `as any` is what developers call the "Nuclear Option."
// `as any` performs a Double Casting.

// Example ====================================================
let myNumber: number = 25;

// This is a "Logic Error" - you can't normally turn a number into a string array
// let list = myNumber as string[]; // ERROR: TS knows this is impossible.

// This is the "Nuclear Option"
let list = myNumber as any as string[]; // NO ERROR

// ============================================================
// Why is it dangerous?
// When you use as any, you lose all IDE features for that variable:
// ❌ No Auto-completion.
// ❌ No Rename refactoring.
// ❌ No protection against "Cannot read property of undefined" crashes.
