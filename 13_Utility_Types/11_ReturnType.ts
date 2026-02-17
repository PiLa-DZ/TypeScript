// ReturnType<T> is the partner to Parameters. 
// While Parameters looks at what goes into a function, 
// ReturnType extracts the type of whatever the function gives back.
//
// This is incredibly useful when you have a complex function 
// and you want to use its result type elsewhere 
// without manually re-typing it.

// ============================================================
// 1. The Real-World Problem
// Imagine you have a function that fetches a user 
// and performs some complex transformations 
// (adding full names, formatting dates, etc.).

function getFormattedUser() {
  return {
    id: 1,
    fullName: "Ali Hamza",
    lastLogin: new Date(),
    preferences: { theme: "dark", lang: "ar" }
  };
}

// How do we define a variable that holds this exact result?
// We don't want to manually type out that whole object structure!

// ============================================================
// 2. The Solution: ReturnType<T>
// You use typeof to get the function's type, and then ReturnType to "grab" what it returns.

type UserResult = ReturnType<typeof getFormattedUser>;

/* Resulting UserResult type:
  {
    id: number;
    fullName: string;
    lastLogin: Date;
    preferences: { theme: string; lang: string; }
  }
*/

const myUser: UserResult = getFormattedUser(); // ✅ Perfect type matching

// ============================================================
// 3. Why is this useful for your Backend?
// Database Repositories: If you use a library that returns complex database records, you can use ReturnType to capture those types for your Service layer.
// Factory Functions: If you have a function that "creates" objects (like a createResponse helper), ReturnType ensures your controllers are using the correct response shape.
// Avoiding Redundancy: If you change the return value of your function (e.g., adding a middleName field), any type using ReturnType will update automatically. You only have to change the code in one place.

// ============================================================
// 4. Handling Async Functions (The Catch)
// This is a very common mistake! If a function is async, it returns a Promise.

async function fetchStatus() {
  return "online";
}

type StatusType = ReturnType<typeof fetchStatus>; 
// Result: Promise<string> (Not just "string"!)

// ------------------------------------------------------------
// Note: If you want the actual string inside the promise, 
// you combine it with what we learned earlier:
type FinalStatus = Awaited<ReturnType<typeof fetchStatus>>;


