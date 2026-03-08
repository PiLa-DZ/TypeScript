// Global Augmentation is the process of adding types 
// to the "Global" scope—the things that exist everywhere 
// in your environment without needing an import statement 
// (like process, console, or global in Node.js).

// ============================================================
// 1. The Core Concept
// In a standard TypeScript file, 
// everything is scoped to that file (it’s a module). 
// To "break out" and tell TypeScript you want to modify something 
// that lives in the global air everyone breathes, 
// you use the declare global block.

// ============================================================
// 2. The Node.js Use Case: process.env
// This is the #1 reason backend developers use Global Augmentation. 
// By default, process.env treats every variable as a string | undefined. 
// This is annoying when you know for a fact your 
// MariaDB port is a number or your secret key is required.

// File: src/types/env.d.ts
export {}; // This makes the file a module (required for augmentation)
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MARIADB_URL: string;
      PORT: string;
      JWT_SECRET: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

// Now, in your code, you get Auto-complete and Type Safety:
const secret = process.env.JWT_SECRET; // TS knows this is a string
const env = process.env.NODE_ENV;    // TS knows this is one of the 3 options

// ============================================================
// 3. Adding Global Functions (Custom Utilities)
// Sometimes you might want to add a utility function to the global object 
// (though use this sparingly!). 
// For example, adding a custom logger to the console object.

export {};
declare global {
  interface Console {
    dbLog(message: string): void;
  }
}

// In your app entry point, you actually define it:
console.dbLog = (msg) => console.log(`[DATABASE]: ${msg}`);

// Now available everywhere:
console.dbLog("Connecting to MariaDB...");

// ============================================================
// 4. The "Magic" export {}
// You might have noticed export {} at the top of the examples. This is a common "gotcha."
// If a file has no imports or exports, it's a "Script" (Global by default).
// If you want to use import (to get types from elsewhere) inside your augmentation file, the file becomes a Module.
// TypeScript only allows declare global inside a Module. If you don't have a real export, export {} tricks TypeScript into treating it as a module so the augmentation works.

// ============================================================
// 5. Why this matters for your Express Backend
// Request Extensions: While we used Namespace Augmentation for Express specifically, some developers use declare global if they want to modify objects that are shared across multiple libraries.
// Third-party side effects: If a library you use adds something to the global scope at runtime, you use this to tell TypeScript about it.









