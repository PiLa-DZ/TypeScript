// 5. Function Overloads
// This is a more advanced roadmap topic. 
// It’s for when a function can behave differently depending on the input.

// Imagine a getUser function that can take either an id (number) or a username (string).

// 1. Define the Overload Signatures
function getUser(id: number): string;
function getUser(username: string): string;

// 2. The Implementation (must be compatible with both)
function getUser(value: any): string {
  if (typeof value === "number") return `User ID: ${value}`;
  return `User Name: ${value}`;
}
