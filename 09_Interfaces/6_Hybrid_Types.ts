// ============================================================
// 1. The Classic Example: A "Function with Properties"
// Imagine you have a function that tracks how many times it has been called.

interface Counter {
  (start: number): string; // The function part
  interval: number;        // The object property part
  reset(): void;           // The object method part
}

function getCounter(): Counter {
  let counter = function (start: number) { return `Count: ${start}`; } as Counter;
  counter.interval = 123;
  counter.reset = function () { console.log("Resetting..."); };
  return counter;
}

const c = getCounter();
c(10);          // Works as a function
c.reset();      // Works as an object
console.log(c.interval); // 123
// Output:
// Resetting...
// 123

// ============================================================
// 2. Real-World Backend Case: Middleware
// You see this pattern most often in libraries like Express or Joi.
// Think about the Express request or response objects, or even the main app instance. You can call app(req, res) as a function, but you also access properties like app.settings or app.get().

interface LoggerMiddleware {
  (req: any, res: any, next: () => void): void; // It's a middleware function
  version: string;                             // It carries metadata
  configure(options: object): void;            // It has configuration methods
}

// 3. Why use Hybrid Types?
// 1. --> Legacy Library Support: Many older JS libraries use this pattern (like jQuery or Select2).
// 2. --> API Design: It allows you to create a "main" entry point (the function) while keeping related utilities attached to it (the methods).
// 3. --> Encapsulation: You can keep state (like the interval in the example above) bundled directly with the logic that uses it.
