// Interfaces vs. Classes
// This often confuses beginners:

// Interface: A pure "compile-time" blueprint. It disappears when the code runs. Use it for data shapes (the "what").
// Class    : A "runtime" factory. It creates real objects and contains logic (the "how").

// A class can implement an interface to guarantee it meets a standard:
interface Logger {
  log(msg: string): void;
}
class FileLogger implements Logger {
  log(msg: string) { /* write to file */ }
}
