// TypeScript gives us two ways to organize code: 
// Modules (the modern standard) 
// and Namespaces (an older, but still relevant tool).

// ============================================================
// 1. TypeScript Modules (ES6 Style)
// Modules are the standard in modern Node.js and Express development. 
// Every file is considered its own module. 
// Variables, 
// functions, 
// and types are private to that file unless you explicitly export them.

// Why use Modules?
// Encapsulation: You only expose what is necessary.
// Dependency Management: It’s clear where every function comes from.
// Tree Shaking: Tools can remove unused code to make your app faster.

// Example: Backend Service
// src/services/studentService.ts
export interface Student {
  id: number;
  name: string;
}
export const getStudent = (id: number): Student => {
  return { id, name: "Ali" };
};

// src/app.ts
import { getStudent, Student } from "./services/studentService";
const student: Student = getStudent(1);

// ============================================================
// 2. Namespaces
// Namespaces were more common before ES6 modules became the standard. 
// They allow you to group related code under a single global name. 
// In modern development, we mostly use them to organize Types rather than logic.

// Why use Namespaces?
// Internal Organization: Grouping several related interfaces together.
// Avoid Name Collisions: If you have two different User types (one for DB, one for API).

// Example: Organizing Types

namespace Database {
  export interface User { id: number; }
  export interface Connection { host: string; }
}

namespace API {
  export interface User { username: string; } // No conflict with Database.User!
}

const dbUser: Database.User = { id: 1 };
const apiUser: API.User = { username: "ali_h" };
