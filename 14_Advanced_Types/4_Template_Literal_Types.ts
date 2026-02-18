// In JavaScript, we use backticks (`) to build strings. 
// In TypeScript, 
// Template Literal Types use that same syntax to build new types out of string patterns.

// ============================================================
// 1. The Core Syntax
// By using backticks and ${}, 
// you can combine a literal type with another type 
// (like string, number, or another literal).

type World = "world";
type Greeting = `hello ${World}`; 

// Result: "hello world"

// ============================================================
// 2. The Power of "Explosion" (Unions)
// The real magic happens when you use Unions. 
// If you put a union inside the ${}, 
// TypeScript will generate every possible combination for you automatically.

type Size = "small" | "large";
type Color = "red" | "blue";

type Shirt = `${Size}-${Color}-shirt`;

/* Resulting Shirt type:
  "small-red-shirt" | "small-blue-shirt" | "large-red-shirt" | "large-blue-shirt"
*/

// ============================================================
// 3. String Manipulation Utilities
// When working with Template Literals, 
// TypeScript gives you four built-in tools to change the casing of your strings:

// - 1. Uppercase<S>: Converts everything to uppercase.
// - 2. Lowercase<S>: Converts everything to lowercase.
// - 3. Capitalize<S>: Capitalizes the first letter.
// - 4. Uncapitalize<S>: Lowercases the first letter.

type Role = "admin";
type ShoutyRole = Uppercase<Role>; // "ADMIN"

// ============================================================
// 4. Why this is a "Must-Have" for Backend
// In an Express/MariaDB environment, 
// you can use these to enforce naming conventions or dynamic event names.

// A. Database Event Listeners
// If you have a database table, 
// you might want to ensure your event names always follow a strict pattern:


type Entity = "User" | "Order";
type Event2 = "Changed" | "Deleted";

type DatabaseEvent = `on${Entity}${Event2}`;

// Now, your listener only accepts valid events:
function listen(event: DatabaseEvent) { }

listen("onUserChanged");   // ✅ Valid
listen("onOrderDeleted");  // ✅ Valid
// listen("onPostCreated"); // ❌ Error: Type '"onPostCreated"' is not assignable.

// B. CSS/Frontend Coordination
// If you are passing styles or Tailwind-like classes from your backend to a frontend, you can ensure they follow the correct format:
// type Margin = m-${1 | 2 | 3 | 4 | 5};

// ============================================================
// 5. Pattern Matching with infer
// You can even use Template Literals to "peek" inside a string and extract data using infer.

type GetId<T> = T extends `user_${infer Id}` ? Id : never;
type MyId = GetId<"user_123">; // Result: "123"




