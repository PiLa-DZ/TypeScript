// In the older days of TypeScript, 
// the terms Internal and External were used to distinguish 
// between how code was shared. 
// While modern documentation now uses the terms Namespaces and Modules, 
// you will still see "Internal/External" in older tutorials or advanced documentation.

// ============================================================
// 1. Internal Modules (Now called Namespaces)
// "Internal" means the code is part of the same global scope of your application. 
// You don't necessarily need a "file loader" 
// (like Webpack or Node.js require) to connect them; 
// they often rely on <script> tags in a specific order.

// Keyword: namespace (formerly module).
// How they work: Everything inside is "hidden" unless you use the export keyword. You access them using "dot notation" (e.g., MyTools.Utility).
// Analogy: Different folders inside one physical filing cabinet.

// This is an "Internal Module" (Namespace)
namespace Database {
    export class Connection { /* ... */ }
}

const db = new Database.Connection();

// ============================================================
// 2. External Modules (Now called Modules)
// "External" means each file is a separate, 
// isolated bubble. 
// Nothing inside is visible to any other file unless you specifically import or export it. 
// These rely on a module loader (Node.js/CommonJS or ES Modules).

// Keywords: import and export.
// How they work: The relationship between files is explicit. File A says "I want this from File B."
// Analogy: Different physical buildings that have to send mail to each other to communicate.

// src/models/User.ts
export class User { /* ... */ }

// src/app.ts
import { User } from "./models/User";

// ============================================================
// Why the terminology changed
// The TypeScript team realized that the word "Module" was being used by JavaScript (ES6) 
// to mean "files that import/export." 
// To avoid confusion, 
// TypeScript renamed their "Internal Modules" to Namespaces 
// so that the word Module would only refer to "External Modules."

// ============================================================
// Which one should you use for MariaDB/Express?
// Always use External Modules. 
// Since you are building a backend project, 
// Node.js expects files to be modules. 
// Using namespaces for your logic in a Node environment 
// can lead to confusing errors and makes it harder for tools to optimize your code.












