// ============================================================
// 1. The Real-World Problem
// Imagine your Student model in MariaDB has 10 fields, 
// including sensitive ones like password or internalNotes. 
// When you want to display a "Student List" in a UI,
// you only need the id, firstName, and lastName.

// You could create a brand-new interface, 
// but then you'd have to update it every time the main Student interface changes.

// ============================================================
// 2. The Solution: Pick<T, K>
// Pick takes two arguments:

// [1] --> T: The source Type (the big object).
// [2] --> K: The keys you want to keep (as a string or a union of strings).


interface Student {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string; // Sensitive!
  createdAt: Date;
}

// We "Pick" only what we want to show publicly
type StudentPreview = Pick<Student, "id" | "firstName" | "lastName">;

/* Resulting StudentPreview type:
  {
    id: number;
    firstName: string;
    lastName: string;
  }
*/

const list: StudentPreview[] = [
  { id: 1, firstName: "Ali", lastName: "B." } // Clean and safe!
];

console.log(list)
// Output:
// [ { id: 1, firstName: 'Ali', lastName: 'B.' } ]


// ============================================================
// 3. Why this is powerful for your Backend
// Security: It ensures you don't accidentally leak sensitive database columns (like password_hash) to the client.
// Performance: It tells other developers exactly which data points are expected for a specific function, reducing confusion.
// Auto-Sync: If you change the type of firstName from string to a complex object in the main Student interface, StudentPreview updates automatically.

// ============================================================
// 4. Pro Tip: Combining them?
// You can even nest them! What if you want to update only the email or firstName?

// This creates a type where ONLY email and firstName exist, AND they are optional.
type UpdateNameOrEmail = Partial<Pick<Student, "email" | "firstName">>;

const list2: UpdateNameOrEmail[] = [
  { email: "ali@example.com", firstName: "Ali"},
  { firstName: "Amin"}
];

console.log(list2)
// [
//   { email: 'ali@example.com', firstName: 'Ali' },
//   { firstName: 'Amin' }
// ]
