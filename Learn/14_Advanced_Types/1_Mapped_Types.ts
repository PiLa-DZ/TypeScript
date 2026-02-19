// Mapped Types are the "engine" behind almost all the utilities we just studied. 
// If Partial and Pick are the pre-made tools, 
// Mapped Types are the factory that allows you to build your own tools.

// ============================================================
// 1. The Core Concept
// A Mapped Type allows you to take an existing type and loop through its keys to create a new one. 
// It uses a syntax very similar to a for...in loop in JavaScript.

// The Syntax:
// { [Property in KeyType]: ValueType }

// ============================================================
// 2. A Basic Example
// Let's say you want to take a Features type and turn all its boolean values into strings.

type Features = {
  darkMode: boolean;
  premium: boolean;
};

type Stringify<T> = {
  [K in keyof T]: string; // "For every Key (K) in T, make its value a string"
};

type StringFeatures = Stringify<Features>;

/* Result:
  {
    darkMode: string;
    premium: string;
  }
*/

// ============================================================
// 3. Mapping Modifiers (+ and -)
// This is how TypeScript actually builds Partial and Readonly. 
// You can add or remove modifiers like ? (optional) or readonly during the mapping process.

// +readonly: Makes everything read-only.
// -readonly: Removes read-only status.
// +?: Makes everything optional.
// -?: Makes everything mandatory (removes the ?).

// Creating your own "Required" type:

type User = {
  id: number;
  name?: string; // Optional
  email?: string; // Optional
};

type Concrete<T> = {
  [K in keyof T]-?: T[K]; // The "-?" removes the optional flag
};

type StrictUser = Concrete<User>;
// Result: { id: number; name: string; email: string; }

// ============================================================
// 4. Key Remapping (The as keyword)
// In modern TypeScript (4.1+), 
// you can even rename the keys as you loop through them. 
// This is amazing for backend developers who need to generate "Getter" or "Setter" names automatically.

interface Student {
  name: string;
  age: number;
}

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type StudentGetters = Getters<Student>;

/* Result:
  {
    getName: () => string;
    getAge: () => number;
  }
*/

// ============================================================
// 5. Why this matters for your MariaDB Backend
// - 1. Dynamic DTOs: If you have a database schema, you can use Mapped Types to automatically generate a "Search Criteria" type where every field is a string-matching pattern.
// - 2. API Response Wrappers: You can create a type that wraps every property of a model in a Response<T> object.
// - 3. State Management: If you’re tracking which fields in a form have been "touched" or "validated," a mapped type can create a boolean version of your entire data model instantly.
