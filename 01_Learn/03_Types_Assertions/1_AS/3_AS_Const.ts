// Example 1 ==================================================
let version = "25.6.0"; // Type is: string
let versionConst = "25.6.0" as const; // Type is: "25.6.0" (The specific string)

// Example 2 ==================================================
const databaseConfig = {
  host: "localhost",
  port: 3306,
} as const;

// databaseConfig.port = 3307;
// ERROR: Cannot assign to 'port' because it is a read-only property.

// Example 3 ==================================================
const ROLES = ["admin", "editor", "viewer"] as const;

// Now, you can derive a type from this array automatically!
type Role = (typeof ROLES)[number]; // Type is: "admin" | "editor" | "viewer"

// ============================================================
// as const vs Object.freeze()
// Object.freeze(): This is a JavaScript feature. It prevents changes while the code is running (runtime).
// as const: This is a TypeScript feature. It prevents changes while you are coding (compile-time). It gives you better auto-completion and errors in your editor.
