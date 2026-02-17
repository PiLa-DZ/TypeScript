// Since you are heading toward MariaDB and Express, 
// you will be dealing with async/await constantly. 
// Awaited is the tool that "unwraps" a Promise to tell you what's inside.

// ============================================================
// 1. The Real-World Problem
// When you fetch a student from your database using an async function, 
// that function returns a Promise<Student>, 
// not just a Student.

// If you want to know what the result of that promise will be before it even finishes, 
// you use Awaited.


async function getStudent() {
  return { id: 1, name: "Ali" };
}

// The type of 'getStudent' is a function that returns Promise<{id: number, name: string}>
type WrappedType = ReturnType<typeof getStudent>; 
// Result: Promise<{id: number, name: string}>

// What if you want the type of the actual data inside that Promise?

// ============================================================
// 2. The Solution: Awaited<T>
// Awaited recursively "drills down" into a Promise until it finds the base type.

type StudentData = Awaited<ReturnType<typeof getStudent>>;

/* Resulting StudentData type:
  {
    id: number;
    name: string;
  }
*/

// ============================================================
// 3. Why is it "Recursive"?
// Sometimes you have a Promise that returns another Promise (it sounds crazy, but it happens in complex APIs). Awaited doesn't stop at the first layer; it keeps digging until it hits the final value.

type DeepPromise = Promise<Promise<Promise<string>>>;

type FinalValue = Awaited<DeepPromise>; 
// Result: string

// ============================================================
// 4. Why this is great for your Backend
// - 1. Generic API Handlers: If you write a helper function that logs the result of any database query, you use Awaited to define the type of the logged data.
// - 2. Type-Safe Middleware: In Express, if you have a middleware that pre-fetches a user, you can use Awaited to ensure the next function knows exactly what the user object looks like.
// - 3. Prisma/ORM Results: Many database libraries return complex Promise types. Awaited helps you extract the clean Interface for your frontend.


