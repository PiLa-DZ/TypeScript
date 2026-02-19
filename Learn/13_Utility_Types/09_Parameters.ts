// Instead of looking at what a function gives back (like ReturnType), 
// Parameters looks at what the function takes in. 
// It extracts the types of all arguments and puts them into a Tuple (a fixed-length array).

// ============================================================
// 1. The Real-World Problem
// Imagine you are using a third-party library for your Express API. 
// It has a function called saveToDatabase, 
// but the library doesn't export the type for that function's arguments.

// If you want to write a "Wrapper" or a "Proxy" function that passes the same data through, 
// you need those types.

// Imagine this is in a library you can't change
function createUser(name: string, age: number, isAdmin: boolean) {
  // logic...
}

// How do we get the type of those 3 arguments?

// ============================================================
// 2. The Solution: Parameters<T>
// Parameters takes the Type of the function and returns an array-like type of its arguments.

type CreateUserArgs = Parameters<typeof createUser>;

// Resulting CreateUserArgs type: [string, number, boolean]

// Now you can use it to ensure your own functions match perfectly:

function myWrapper(...args: Parameters<typeof createUser>) {
  console.log("Logging before save...");
  createUser(...args);
}

myWrapper("Ali", 25, true); // ✅ Valid
// myWrapper("Ali", "25");   // ❌ Error: Argument at index 1 must be number

// ============================================================
// 3. Accessing Specific Parameters
// Since the result is a Tuple (array), 
// you can grab a specific argument by its index.

type NameType = Parameters<typeof createUser>[0]; // string
type AgeType  = Parameters<typeof createUser>[1]; // number

// ============================================================
// 4. Why this is great for your Backend
// Middleware: If you are wrapping an Express request handler, you can use Parameters<RequestHandler> to make sure your wrapper accepts exactly what Express expects (req, res, next).
// Event Listeners: If you are listening to MariaDB events, you can extract the argument types of the event callback to make your listeners type-safe.
// Refactoring: It allows you to keep your code "in sync" with external libraries. If the library updates and adds a 4th argument, your Parameters helper will update automatically.



