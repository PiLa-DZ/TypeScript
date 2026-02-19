// While Pick says, "I only want these 3 things," 
// Omit says, "I want everything EXCEPT these 3 things." 
// It is often much faster to use when you have a massive interface and only want to hide one or two sensitive fields.

// ============================================================
// 1. The Real-World Problem
// When you are creating a new user in your MariaDB database, your Student interface likely includes an id (auto-incremented by the DB) and a createdAt timestamp.
// When the user sends their registration data from a form, they don't send the id or the createdAt date yet. You need a type that represents "Student data minus the system-generated fields."

// ============================================================
// 2. The Solution: Omit<T, K>
// Omit takes two arguments:

// [1] --> T: The source Type.
// [2] --> K: The keys you want to remove.

interface Student {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

// We "Omit" the fields that the database handles automatically
type CreateStudentInput = Omit<Student, "id" | "createdAt">;

/* Resulting CreateStudentInput type:
  {
    email: string;
    firstName: string;
    lastName: string;
  }
*/

const newStudent: CreateStudentInput = {
  email: "ali@example.com",
  firstName: "Ali",
  lastName: "B."
}; // ✅ No error! We don't need 'id' or 'createdAt' here.



