// ============================================================
// 1. The Core Concept: "Declaration Merging"
// In TypeScript, 
// if you define a namespace with the same name multiple times, 
// TypeScript doesn't overwrite the first one; 
// it merges them together.

// This is extremely powerful because it allows you to 
// "teleport" new properties into libraries you didn't write.

// ============================================================
// 2. The Real-World Backend Scenario
// You are building an Express app. 
// You use a middleware to authenticate users. 
// Once authenticated, you want to attach the user object to the req (Request).

// However, 
// TypeScript’s standard Request type doesn't know about your user object. 
// This is where Namespace Augmentation saves the day.

// ============================================================
// 3. How to Augment a Module
// To augment an external module (like Express), 
// you must use the declare module syntax.

// File: src/types/express-augment.d.ts
import { User } from "../models/User"; // Import your custom type
declare module "express" {
  // We are reaching into the 'express' module
  export interface Request {
    // And adding a new property to the existing Request interface
    user?: User;
    tenantId?: string;
  }
}

// Now, in your controller, you can do this without errors:
app.get("/profile", (req, res) => {
  console.log(req.user?.name); // ✅ TypeScript now recognizes 'user'!
});

// ============================================================
// 4. Augmenting Global Namespaces
// Sometimes you aren't augmenting a specific module, 
// but rather the Global scope 
// (things available everywhere like Window in browsers or Process in Node).

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MARIADB_HOST: string;
      MARIADB_PORT: string;
      JWT_SECRET: string;
    }
  }
}

// This ensures that whenever you type process.env., 
// your IDE suggests your specific MariaDB environment variables.

// ============================================================
// 5. The Golden Rules of Augmentation
// - 1. Imports Matter: If you are augmenting a module (like express), you must have at least one top-level import or export in your .d.ts file to make it a module.
// - 2. Matching Names: You must use the exact name of the module or namespace you want to extend.
// - 3. No New Logic: You can only add types (interfaces, type aliases). You cannot add actual JavaScript logic/functions inside the augmentation block.











