```ts
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
