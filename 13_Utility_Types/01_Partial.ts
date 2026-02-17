// 1. The Real-World Problem
// Imagine you have a User in your MariaDB database. 
// When a user wants to "Update Profile," they usually don't change everything. 
// They might only change their email or just their bio.

// If your function expects a full User object, it will throw an error because the other fields are missing.

interface User {
  id: number;
  username: string;
  email: string;
  bio: string;
}

// ❌ ERROR: This function requires ALL 4 fields
// function updateProfile(id: number, data: User) {
  // database logic...
// }

// updateProfile(1, { bio: "New bio" }); 
// Error: Property 'username', 'email', etc. are missing


// 2. The Solution: Partial<T>
// Instead of creating a second interface called UserUpdate, you wrap your existing User in Partial.

// ✅ SUCCESS: Partial makes all fields optional automatically
function updateProfile(id: number, data: Partial<User>) {
  // Inside here, 'data' is: { id?, username?, email?, bio? }
  console.log(`Updating user ${id} with:`, data);
}

updateProfile(1, { bio: "I love Arch Linux!" }); // Works perfectly!

// ============================================================
// 3. How it looks "under the hood"
// You don't need to write this, but this is what TypeScript does for you when you use Partial<User>:

// TypeScript generates this in memory:
// interface User {
//   id?: number;
//   username?: string;
//   email?: string;
//   bio?: string;
// }

// ============================================================
// 4. Why this is great for your Backend
// -- 1. API Endpoints: For PATCH requests (where you only update some fields), Partial is your best friend.
// -- 2. Database Queries: When building a "Search" or "Filter" function for your MariaDB, you can use Partial<Student> to allow the user to filter by any combination of fields.
// -- 3. DRY (Don't Repeat Yourself): You define your "Source of Truth" (the main Interface) once, and use Partial for all the variations.
