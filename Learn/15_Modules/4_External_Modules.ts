// If Ambient Modules are for describing code that already exists 
// (like libraries), 
// External Modules are for the code you actually write. 
// In Node.js, these are treated as ES Modules or CommonJS.

// ============================================================
// 1. The Core Rule of External Modules
// In TypeScript, 
// any file that contains a top-level import or export is considered an External Module.

// If a file does not have an import or export, 
// TypeScript treats it as a "script" 
// whose variables are in the global scope 
// (which is usually bad for big projects).

// ============================================================
// 2. Exporting (The "Producer")
// You have two main ways to share code from your MariaDB service or Express controller.

// A. Named Exports (Best Practice)
// You can export multiple things from one file. 
// This is preferred because it makes it obvious what you are importing.

// src/database/query.ts
export const dbName = "school_db";
export function executeQuery(sql: string) { 
    /* ... */ 
}
export interface QueryResult { success: boolean; }

// B. Default Exports
// Every file can have one default export. 
// It’s often used for the main class or function of a file.

// src/models/Student.ts
export default class Student {
    constructor(public id: number, public name: string) {}
}

// ============================================================
// 3. Importing (The "Consumer")
// When you bring that code into your main app.ts, 
// the syntax changes slightly based on how it was exported.

// Named imports use { }
import { executeQuery, QueryResult } from "./database/query";

// Default imports do NOT use { } and can be renamed
import StudentModel from "./models/Student"; 

// Import everything as a single object (Namespace style)
import * as DB from "./database/query";
console.log(DB.dbName);

// ============================================================
// 4. Re-exporting (The "Barrel" Pattern)
// As your Express project grows, 
// you might have 20 different services. 
// Importing them one by one is messy. 
// A "Barrel" file (usually index.ts) 
// collects them and exports them all from one place.

// src/services/index.ts
export * from "./userService";
export * from "./authService";
export * from "./mailService";

// Now, in your controller, you only need one line:
import { userService, authService } from "./services";

// ============================================================
// 5. Type-Only Imports
// In backend development, 
// you often import an interface just for type-checking. 
// TypeScript allows you to use import type to tell the compiler: 
// "I only need this for types; don't include it in the final JavaScript code."

import type { Student } from "./models/Student";

const studentInfo: Student = { id: 1, name: "Ali" };

// This helps with performance and prevents "Circular Dependency" errors.











