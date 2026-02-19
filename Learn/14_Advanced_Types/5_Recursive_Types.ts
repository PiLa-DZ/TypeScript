// A Recursive Type is a type that references itself. 
// In backend development, 
// this is essential for representing data structures 
// that can have infinite nesting, 
// like folder structures, 
// comment threads, 
// or JSON trees.

// ============================================================
// 1. The Core Concept
// Just like a recursive function calls itself, 
// a recursive type uses its own name within its definition.

// A Simple Example: The Linked List
// A linked list is just an object that contains a value and a "pointer" to the next identical object.


type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null; // It references itself!
};

const list: LinkedList<number> = {
  value: 1,
  next: {
    value: 2,
    next: null
  }
};

// ============================================================
// 2. Real-World Backend Case: Tree Structures
// If you are building a file explorer for your app, 
// a "Folder" contains "Files" and potentially other "Folders."

type FileSystemItem = {
  name: string;
  type: "file" | "folder";
  children?: FileSystemItem[]; // Recursive: an array of itself
};

const myProject: FileSystemItem = {
  name: "my-app",
  type: "folder",
  children: [
    { name: "package.json", type: "file" },
    { 
      name: "src", 
      type: "folder", 
      children: [{ name: "index.ts", type: "file" }] 
    }
  ]
};

// ============================================================
// 3. Recursive Logic: The "Deep" Utilities
// You can combine Recursive Types with Mapped Types 
// to create powerful "Deep" versions of the utility types we learned earlier.

// For example, 
// the standard Readonly<T> only makes the first level of an object immutable. 
// If you want a DeepReadonly that freezes every single nested object, 
// you use recursion:

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object 
    ? DeepReadonly<T[K]> // Recursive call for nested objects
    : T[K];
};

interface User {
  id: number;
  profile: {
    bio: string;
  };
}

const user: DeepReadonly<User> = { id: 1, profile: { bio: "Hello" } };
// user.profile.bio = "New Bio"; // ❌ Error! Even the nested property is readonly.

// ============================================================
// 4. JSON Representation
// In Express, you often receive JSON. But what is the type of "any valid JSON"? It’s recursive!

type JsonValue = 
  | string 
  | number 
  | boolean 
  | null 
  | { [key: string]: JsonValue } // Objects containing JsonValues
  | JsonValue[];                 // Arrays containing JsonValues

// ============================================================
// 5. Why this matters for your MariaDB Backend
// - Nested Comments: If you are building a social media app, comments can have replies, which can have replies (a tree).
// - Category Hierarchies: In an E-commerce database, "Electronics" might have a sub-category "Computers," which has "Laptops."
// - Recursive API Payloads: For complex configurations or settings that can be nested indefinitely.






