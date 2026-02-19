// As a backend developer, 
// you will often receive data that might be null or undefined 
// (especially when fetching optional fields from MariaDB). 
// NonNullable allows you to take a type and strictly remove those "empty" possibilities.

// ============================================================
// 1. The Real-World Problem
// Imagine you have a Union Type for a student's middle name. 
// In the database, this could be a string, 
// but it could also be null (if they don't have one) 
// or undefined (if the data wasn't loaded).

type MiddleName = string | null | undefined;

// You want to write a function that ONLY accepts a real string.
// If you use 'MiddleName', TypeScript will force you to check for null every time.

// ============================================================
// 2. The Solution: NonNullable<T>
// NonNullable filters out null and undefined from any Union Type.

type ValidName = NonNullable<MiddleName>;

// Resulting ValidName: string

function printName(name: ValidName) {
  console.log(name.toUpperCase()); // ✅ Safe! No need to check for null.
}

printName("Hussein"); // ✅ Valid
// printName(null);    // ❌ Error: Argument is not assignable to 'string'

// ============================================================
// 3. How it differs from Required
// This is a common interview question!
// Required<T>: Works on Objects. It removes the ? from properties (making them mandatory).
// NonNullable<T>: Works on Values/Unions. It removes the actual null and undefined types from the list of choices.

// ============================================================
// 4. Why this is great for your Backend
// Database Results: When you use an ORM like Prisma, it might return Email | null. If you have a function that sends an email, it cannot handle a null. You use NonNullable to ensure the function only gets real data.
// Environment Variables: process.env.PORT is typed as string | undefined. To use it safely in your Express server, you can "cast" it or filter it using NonNullable logic.




