// If you've ever used a ternary operator in JavaScript 
// (condition ? true : false), you already know the syntax.

// ============================================================
// 1. The Basic Syntax
// A conditional type checks if one type is "assignable" to another using the extends keyword.

// T extends  U ? X : Y
//
// if T can fit into U
// Then the type is X
// Else the type is Y

// ============================================================
// 2. A Simple Example
// Imagine you want a type that tells you if something is a string or "something else."

type IsString<T> = T extends string ? "Yes, it is a string" : "No, it is not";

type Test1 = IsString<string>;  // Result: "Yes, it is a string"
type Test2 = IsString<number>;  // Result: "No, it is not"

// ============================================================
// 3. The Real Power: infer
// This is the most "magical" part of conditional types. 
// The infer keyword allows you to "dig inside" a type and pull out a piece of it.

// This is exactly how the Awaited utility works! 
// It looks at a Promise<T> and infers what the T is.

type GetArrayItem<T> = T extends Array<infer Item> ? Item : T;

type StringArray = GetArrayItem<string[]>; // Result: string
type NotAnArray = GetArrayItem<number>;   // Result: number

// ============================================================
// 4. Why this is useful for your Backend
// As a MariaDB/Express developer, 
// you often deal with "Generic" responses. 
// You can use conditional types to automatically determine the response type based on the input.

// Example: Database Query Handler

interface User { id: number; name: string; }

// If the input is a number, we return a single User. 
// If it's an array of numbers, we return an array of Users.
type DBResult<T> = T extends number ? User : User[];

function find<T extends number | number[]>(id: T): DBResult<T> {
    // MariaDB logic here...
    return {} as any; 
}

const single = find(1);      // Type is User
const multiple = find([1, 2]); // Type is User[]

// ============================================================
// 5. Distributive Conditional Types
// When you pass a Union Type into a conditional type, 
// TypeScript automatically loops through each member of the union. 
// This is how Exclude is built!

type RemoveString<T> = T extends string ? never : T;

type Result = RemoveString<string | number | boolean>;
// 1. Is string? Yes -> never
// 2. Is number? No -> number
// 3. Is boolean? No -> boolean
// Final Result: number | boolean
