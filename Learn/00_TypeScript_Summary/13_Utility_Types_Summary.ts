// ============================================================
// 1. Partial  
// Everything is optional
interface User { id: number; username: string; email: string; bio: string; }
let CustomUser: Partial<User> // { id?: number; username?: string; email?: string; bio?: string; }

// ============================================================
// 2. Pick
// I Just want 'username' And 'bio'
type StudentPreview = Pick<User, "username" | "bio" >; // { username: string; bio: string; }

// ============================================================
// 3. Omit
// I want everything EXCEPT 'id' And 'email'
type StudentPreview2 = Omit<User, "id" | "email">; // { username: string; bio: string; }

// ============================================================
// 4. Readonly
// Every properties is Readonly
const ThisUserIsReadOnly: Readonly<User> = {id: 1, username: "a", email: "b", bio: "c"}

// ============================================================
// 5. Record
// Key is a string (ID), Value is a Student object
const usersDatabase: Record<string, User> = {
  "S_001": {id: 1, username: "a", email: "b", bio: "c"},
  "S_002": {id: 2, username: "A", email: "B", bio: "C"}
};

// ============================================================
// 6. Exclude
// Eraser from a list of choices
type UserRole = "Admin" | "Manager" | "Editor" | "Guest";
type StaffRole = Exclude<UserRole, "Guest">; // "Admin" | "Manager" | "Editor"

// ============================================================
// 7. Extract
// Highlighter from a list of choices
type StaffRole2 = Extract<UserRole, "Admin" | "Manager" | "Editor">; // "Admin" | "Manager" | "Editor"

// ============================================================
// 8. Awaited
// Dealing with async/await
async function getStudent() { return { id: 1, name: "Ali" }; }
type WrappedType = ReturnType<typeof getStudent>; // Promise<{id: number, name: string}>
type StudentData = Awaited<ReturnType<typeof getStudent>>; // { id: number; name: string; }

// ============================================================
// 9. Parameters
// Takes all arguments and puts them into a Tuple
function createUser(name: string, age: number, isAdmin: boolean) { /* ... */ }
type CreateUserArgs = Parameters<typeof createUser>; // [string, number, boolean]

// ============================================================
// 10. Non_Nullable
// Filters out null and undefined from any Union Type.
type MiddleName = string | null | undefined;
type ValidName = NonNullable<MiddleName>; // string

// ============================================================
// 11. ReturnType
// ReturnType extracts the type of whatever the function gives back
function getFormattedUser() {
  return { id: 1, fullName: "Ali Hamza", lastLogin: new Date(), preferences: { theme: "dark", lang: "ar" } };
}
type UserResult = ReturnType<typeof getFormattedUser>;
/* Resulting UserResult type:
  {
    id: number;
    fullName: string;
    lastLogin: Date;
    preferences: { theme: string; lang: string; }
  }
*/

// ============================================================
// 12. InstanceType (InstanceType<typeof DatabaseConnection>) // 
// InstanceType tells you what a Class produces when you use the new keyword
class DatabaseConnection {
  connect() { console.log("Connected to MariaDB"); }
}
type ConnectionInstance = InstanceType<typeof DatabaseConnection>;
// Resulting ConnectionInstance: The shape of the object { connect: () => void }
