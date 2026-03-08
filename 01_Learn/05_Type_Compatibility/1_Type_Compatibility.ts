// Type_Compatibility
// Type Compatibility is the set of rules TypeScript uses to decide if one type can be assigned to another.

// ============================================================
// 1. Structural Typing (The "Duck Typing" Rule)
interface User {
  id: number;
  name: string;
}

interface Guest {
  id: number;
  name: string;
  temporary: boolean;
}

let person: User;
let visitor: Guest = { id: 1, name: "Ali", temporary: true };

// This WORKS! Guest has 'id' and 'name', so it's "compatible" with User.
person = visitor; 

// This FAILS! User is missing the 'temporary' property required by Guest.
// visitor = person;

// ============================================================
// 2. The "Excess Property" Check

// Error: 'email' was not expected in User
// const newUser: User = { id: 2, name: "Sami", email: "sami@test.com" }; 

// BUT, if you use a variable, it works (back to Structural rules):
const data = { id: 2, name: "Sami", email: "sami@test.com" };
const finalUser: User = data; // Valid!
