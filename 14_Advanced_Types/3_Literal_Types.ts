// Instead of saying "this variable is a string," 
// you say "this variable can only be the string 'admin'."

// ============================================================
// 1. The Core Concept
// A literal type is a type that represents a single, specific value. 
// By itself, it’s not very useful, 
// but when combined into a Union, 
// it becomes a powerful way to restrict inputs.

// A normal string
let role: string = "guest"; 

// A Literal Type
let specificRole: "admin" = "admin";
// specificRole = "editor"; // ❌ Error: Type '"editor"' is not assignable to type '"admin"'.

// ============================================================
// 2. Literal Unions (The Most Common Use)
// This is how you define "Enums" without the overhead of actual TypeScript Enums. 
// It's the standard way to handle fixed options in modern backend code.

type DBStatus = "connected" | "disconnected" | "connecting" | "error";

function handleDB(status: DBStatus) {
  if (status === "error") {
      // Logic for error...
  }
}

handleDB("connected"); // ✅ Valid
// handleDB("loading"); // ❌ Error: Not part of the union.

// ============================================================
// 3. Template Literal Types
// This is the "advanced" version. 
// Just like JavaScript template strings (backticks), 
// you can combine literal types to create complex string patterns dynamically.

type Domain = "user" | "post" | "comment";
type Action = "create" | "update" | "delete";

// TypeScript will automatically generate ALL combinations!
type Permission = `${Domain}_${Action}`;

/* Resulting Permission:
  "user_create" | "user_update" | "user_delete" | 
  "post_create" | "post_update" | "post_delete" | 
  "comment_create" | "comment_update" | "comment_delete"
*/

// ============================================================
// 4. Why this is great for your MariaDB Backend

// - API Endpoints: You can define a type for all your API versions (e.g., v1 | v2).
// - CSS/Style constants: If you're building a full-stack app, you can restrict colors or padding sizes.
// - Database Queries: If you have a sort parameter in your Express route, you can restrict it to "ASC" | "DESC".
// - String IDs: If your MariaDB IDs always start with a prefix:

type StudentId = `std_${number}`;
const myId: StudentId = "std_123"; // ✅ Valid
// const wrongId: StudentId = "123"; // ❌ Error

// ============================================================
// 5. Literal Types + Object Mapping
// When used with the keyof operator, literal types allow you to build very safe "Getters."

const settings = {
  port: 3306,
  host: "localhost"
};

function getSetting(key: keyof typeof settings) {
  return settings[key];
}

getSetting("port"); // ✅ Valid
// getSetting("password"); // ❌ Error
