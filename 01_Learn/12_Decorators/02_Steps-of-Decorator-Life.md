- -------------------------------------------------------------------------------------------------------------------
### Steps-of-Decorator-Life
- -------------------------------------------------------------------------------------------------------------------
### Steps of a Decorator's Life: (1. Selection-Step, 2. Transformation-Step 3., Application-Step)
### How to know which "Life Stage" you are in?
1. If your code is OUTSIDE the return of the decorator:
    - It runs once at the start.
2. If your code is INSIDE the descriptor.value:
    It runs every time the method is called.

```ts
function MyDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // --- STAGE: CODE LOAD ---
  console.log("This runs ONCE when the app starts");
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // --- STAGE: APPLICATION/USAGE ---
    console.log("This runs EVERY TIME you call the method");
    return originalMethod.apply(this, args);
  };

  console.log("This runs ONCE when the app starts");
}

class a {
  @MyDecorator
  a() {}
}

a.prototype.a();
// OUTPUT:
// This runs ONCE when the app starts
// This runs ONCE when the app starts
// This runs EVERY TIME you call the method
```
1. Load Stage: You use the decorator to collect all the column names.
2. Application Stage: You use the decorator to validate that the email string actually looks like an email before the SQL query is sent.

```ts
// ============================================================
// TIME 1: Evaluation (Runs once when the file is read)
function LogQuery(message: string) {
  console.log("Evaluation: " + message);

  // TIME 2: Transformation/Setup (Runs once when the file is read)
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("Execution/Setup: " + message);
    const originalMethod = descriptor.value;

    // ------------------------------------------------------------
    // TIME 3: The "Call" (Runs every time you call repo.save())
    descriptor.value = function (...args: any[]) {
      console.log("ACTUAL RUNTIME CALL: " + message);
      return originalMethod.apply(this, args);
    };
  };
}

class a {
  @LogQuery("Done")
  b() {}
}

a.prototype.b();
// Evaluation: Done
// Execution/Setup: Done
// ACTUAL RUNTIME CALL: Done

// Time 1 & 2 (Load Stage): These are like the Construction Workers building the house. They put up the walls and paint the rooms. This only happens once.
// Time 3 (Runtime/Call Stage): This is the Owner living in the house. They turn the lights on and off every day.
```
