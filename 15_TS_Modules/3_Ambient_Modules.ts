// When you use a library written in plain JavaScript 
// (which has no types), 
// or when you want to tell TypeScript about global variables that exist in 
// your environment (like process.env), 
// you use Ambient Modules.

// ============================================================
// 1. What does "Ambient" mean?
// An "ambient" declaration is a way of telling TypeScript: 
// "I promise this thing exists somewhere else 
// (like in a JS library or the browser), 
// so don't throw an error. Here is what it looks like."

// These declarations usually live in files ending in .d.ts (Definition files). 
// They contain no executable code—only types.

// ============================================================
// 2. Declaring a Module
// If you install a package that doesn't have types (e.g., an old MariaDB utility), 
// TypeScript will complain. 
// You can "fix" this by creating an ambient module declaration.

// src/types/declarations.d.ts

// This tells TS that 'legacy-mapper' exists
declare module "legacy-mapper" {
  export function mapUser(data: any): string;
  export const version: string;
}

// Now, in your main code, you can import it without errors:

import { mapUser } from "legacy-mapper"; // ✅ TS is happy now!

// ============================================================
// 3. Shorthand Ambient Modules
// If you are in a rush and just want TypeScript to 
// stop complaining about a missing module 
// (and you don't care about the specific types yet), 
// you can use a shorthand:

declare module "some-untyped-library";
// This makes every import from that library the any type.

// ============================================================
// 4. Ambient Namespaces and Globals
// Sometimes you want to add something to the global scope. 
// In an Express backend, 
// a very common task is adding a custom property to the Express Request object 
// (like req.user after authentication).

// src/types/express.d.ts

declare global {
  namespace Express {
    interface Request {
      userRole: "admin" | "guest"; // Adding our own property to Express
    }
  }
}

// ============================================================
// 5. Why this is vital for your Express/MariaDB Stack
// - 1. Environment Variables: You can type your process.env so you don't get errors when accessing process.env.DB_PASSWORD.
// - 2. External Assets: If you are using a build tool and want to import .sql files or .json files as modules.
// - 3. Library Fixes: Sometimes @types packages have small bugs. You can use ambient declarations to "patch" those types locally.




