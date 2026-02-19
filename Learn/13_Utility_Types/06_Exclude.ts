// Think of Exclude as a filter for a list of choices.

// ============================================================
// 1. The Core Difference
// This is the most important thing to remember:

// Omit: Removes properties from an object.
// Exclude: Removes members from a union.

// ============================================================
// 2. The Real-World Problem
// Imagine you have a Union Type representing all possible User Roles in your Express app.

type UserRole = "Admin" | "Manager" | "Editor" | "Guest";
// Now, you want to create a new type called StaffRole that includes everyone except the "Guest." 
// Instead of typing them all out again, you use Exclude.

// ============================================================
// 3. The Solution: Exclude<UnionType, ExcludedMembers>
// Exclude takes two arguments:

// [1] --> T: The full Union Type (the "List").
// [2] --> U: The members you want to kick out.

// We "Exclude" the Guest from the list
type StaffRole = Exclude<UserRole, "Guest">;

// Resulting StaffRole: "Admin" | "Manager" | "Editor"

const myRole: StaffRole = "Admin"; // ✅ Valid
// const myRole: StaffRole = "Guest"; // ❌ Error: "Guest" is not allowed!

// ============================================================
// 4. Why use this for your Backend?
// In a Node.js/MariaDB stack, you might have status codes or event types.

// Example: Task Statuses

type TaskStatus = "Todo" | "InProgress" | "Testing" | "Done" | "Archived";

// You want a type for statuses that are still "active" (not finished)
type ActiveStatus = Exclude<TaskStatus, "Done" | "Archived">;

function updateTask(id: number, status: ActiveStatus) {
  // This function only accepts "Todo", "InProgress", or "Testing"
}







