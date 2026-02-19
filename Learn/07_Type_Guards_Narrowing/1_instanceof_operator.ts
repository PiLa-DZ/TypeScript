// instanceof_operator
// It checks if an object was created by a specific constructor or class. 
// In your backend, this is your #1 tool for Error Handling.

// ============================================================
// 1. The Syntax
// It returns a boolean (true or false).

class User {
  name: string = "Archie";
}

const me = new User();

console.log(me instanceof User); // true
console.log(me instanceof Array); // false

// ============================================================
// 2. The Real-World Backend Power: Error Handling
// When your Express app crashes, you need to know why. 
// Was it a database error? A validation error? A generic server error? instanceof allows you to "narrow" the error type.

try {
  // Imagine a MariaDB query here using Prisma
  throw new Error("Database connection failed");
} catch (err) {
  if (err instanceof TypeError) {
    // Handle specific code/logic errors
    console.log("You have a typo in your code!");
  } else if (err instanceof Error) {
    // Handle standard errors
    console.log(err.message);
  }
}

// ============================================================
// 3. Why it matters for your 2026 Stack
// In Node.js 25, you'll be writing a lot of custom classes for your "Services" (like UserService.ts or DatabaseService.ts).

class DatabaseService {
  connect() { /* ... */ }
}

function initialize(service: unknown) {
  if (service instanceof DatabaseService) {
    // TypeScript now knows 'service' has the .connect() method!
    service.connect();
  }
}














