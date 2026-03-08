// Union_Types

// Example 1 ==================================================
// 1. The Syntax
let id: string | number;

id = 101;       // ✅ Valid
id = "A-101";   // ✅ Valid
// id = true;   // ❌ Error: Boolean is not part of the union.

// Example 2 ==================================================
// 2. Literal Unions (The "Choices" Power)
let connectionStatus: "connected" | "disconnected" | "error";

connectionStatus = "connected";   // ✅ Valid
// connectionStatus = "hacking";  // ❌ Error: Type '"hacking"' is not assignable to type '"connected" | "disconnected" | "error"'.

// Example 3 ==================================================
// 3. "Narrowing" (How to use Unions safely)
// If you have a variable that is string | number, TypeScript won't let you use string methods (like .toUpperCase()) until you prove it's a string. This is called Type Narrowing.
function processId(id: string | number) {
    if (typeof id === "string") {
        // TypeScript knows 'id' is a string here
        console.log(id.toUpperCase());
    } else {
        // TypeScript knows 'id' must be a number here
        console.log(id.toFixed(2));
    }
}

// Example 4 ==================================================
// 4. Real-World Backend Scenario
// When using Prisma to find a user in MariaDB, the result is a Union Type because the user might not exist:

// The type inferred here is: User | null
const user = await prisma.user.findUnique({ where: { id: 1 } });

if (user === null) {
  console.log("User not found");
} else {
  // Now it's safe to access user.name
  console.log(user.name);
}
