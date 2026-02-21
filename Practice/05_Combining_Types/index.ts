// == Union ===================================================
let id: string | number;
id = 101; // ✅ Valid
id = "A-101"; // ✅ Valid

// == Literal Unions ==========================================
let connectionStatus: "connected" | "disconnected" | "error";
connectionStatus = "connected"; // ✅ Valid
// connectionStatus = "hacking";  // ❌ Error: Type '"hacking"' is not assignable to type '"connected" | "disconnected" | "error"'.

// == "Narrowing" (How to use Unions safely) ==================
// If you have a variable that is string | number, TypeScript won't let you use string methods (like .toUpperCase()) until you prove it's a string. This is called Type Narrowing.
function processId(id: string | number) {
  if (typeof id === "string") {
    // TypeScript knows 'id' is a string here
    console.log(id.toUpperCase());
  } else {
    // TypeScript knows 'id' must be a number here
    console.log(id.toFixed(2));
  }
}

// == Intersection_Types ======================================
type a = { name: string };
type b = { age: number };
type c = a & b;
const d: c = { name: "a", age: 22 };
console.log(d); // { name: 'a', age: 22 }

// == Intersection_Types Conflict =============================
// If you try to intersect two types that have the same property name but different types, TypeScript will create a type called never because it's impossible to be both.
type A = { id: string };
type B = { id: number };
type C = A & B;
// const D: C = { id: 22 }; // Error --> id is never
// id is now 'never' because it cannot be a string AND a number at the same time.

// == Type Aliases ============================================
type User = { name: string; age: number };
const newUser: User = { name: "Jol", age: 22 };

// == keyof_Operator ==========================================
let myUserKeys: keyof User; // "name" | "age";
myUserKeys = "name";
// myUserKeys = "email"; // Error
