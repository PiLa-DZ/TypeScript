// While Pick and Omit help you modify existing interfaces, 
// Record helps you create a new structure where you know 
// the "shape" of the keys and the "type" of the values, 
// but you don't know exactly which keys will be used yet.

// ============================================================
// 1. The Real-World Problem
// Imagine you are building an Express API for a school. You want to store a list of students, but instead of an array, you want to store them in an object where the Key is the studentID (a string) and the Value is the Student object.

// Without Record, you might try this:
const students: any = {}; // ❌ UNSAFE: 'any' is dangerous

// ============================================================
// 2. The Solution: Record<Keys, Type>
// The Record utility takes two arguments:

// [1] --> Keys: What type of data are the keys? (usually string, number, or a specific list of strings).
// [2] --> Type: What type of data is stored in the values?

interface Student {
  name: string;
  grade: number;
}

// Key is a string (ID), Value is a Student object
const studentDatabase: Record<string, Student> = {
  "S_001": { name: "Ali", grade: 95 },
  "S_002": { name: "Hamza", grade: 88 }
};

console.log(studentDatabase["S_001"].name); // ✅ TypeScript knows this is 'Ali'

// ============================================================
// 3. Using Record with Union Types (Very Powerful)
// This is where Record becomes a "security guard." You can force an object to have only specific keys.

type Role = "admin" | "editor" | "viewer";

interface Permissions {
  canDelete: boolean;
  canEdit: boolean;
}

// This object MUST have exactly these three keys
const rolePermissions: Record<Role, Permissions> = {
    // NOTE: If the LSP show error here it's just because you don't have tsconfig.ts
  admin: { canDelete: true, canEdit: true },
  editor: { canDelete: false, canEdit: true },
  viewer: { canDelete: false, canEdit: false }
};

// ❌ Error: Property 'viewer' is missing! (TS catches this immediately)


// ============================================================
// 4. Why this is great for your Backend
// - 1. Caching: When you fetch data from MariaDB and store it in memory for a few seconds to speed up your API.
// - 2. Translation/Localization: If your app supports multiple languages (Record<'en' | 'fr', string>).
// - 3. Status Codes: Mapping HTTP status codes to custom messages (Record<number, string>).

