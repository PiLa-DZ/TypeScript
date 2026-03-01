// keyof_Operator
// The keyof operator is a "metadata" tool. 
// It takes an Object Type and spits out a Union of its keys (the property names) as strings.

// ============================================================
// 1. How it works
// Think of it as extracting the "blueprint" labels of an object.

type User = {
  id: number;
  username: string;
  email: string;
};

// This creates a new type: "id" | "username" | "email"
type UserKeys = keyof User;

let myProperty: UserKeys;

myProperty = "username";    // ✅ Valid
// myProperty = "password"; // ❌ Error: "password" doesn't exist in User!

// ============================================================
// 2. Real-World Backend Use Case: Sorting
// Imagine you are writing a function to fetch users from MariaDB and you want to allow the user to choose which column to sort by.

function sortUsers(users: User[], sortBy: keyof User) {
  return users.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
}

// This is safe. If you rename 'username' to 'login' in the User type,
// TypeScript will instantly show errors everywhere you used "username".

// ============================================================
// 3. Combining keyof with typeof
// Sometimes you don't have a type defined, but you have a constant object (like a config file). You can combine these two to get the keys:

const dbConfig = {
  host: "localhost",
  port: 3306,
  database: "main_db"
} as const;

// 1. typeof gets the shape
// 2. keyof gets the keys: "host" | "port" | "database"
type ConfigKeys = keyof typeof dbConfig;





