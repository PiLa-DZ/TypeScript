// 1. Parameter and Return Typing
// By default, TypeScript wants to know exactly what goes in and what comes out.

function add(a: number, b: number): number {
  return a + b;
}

// Parameters: a: number, b: number (Required).
// Return Type: : number (Optional, but highly recommended for backend logic to prevent accidental undefined returns).
