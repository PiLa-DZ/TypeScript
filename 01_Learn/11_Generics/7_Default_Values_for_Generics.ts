// Default Values for Generics
// Just like function arguments, you can provide a default type for a generic. If the user doesn't specify one, it falls back to your default.

// If no type is provided, it defaults to string
interface Container<T = string> {
  content: T;
}

const box1: Container = { content: "Hello" }; // T is string
const box2: Container<number> = { content: 100 }; // T is number
