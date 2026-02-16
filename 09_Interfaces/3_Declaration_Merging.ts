// 4. Declaration Merging
// This is a "superpower" unique to Interfaces. If you define the same interface twice, TypeScript automatically merges them. This is how third-party library types (like Express's Request object) are extended.

interface Product {
  name: string;
}

interface Product {
  price: number;
}

// Product now has BOTH name and price automatically
const item: Product = { name: "Laptop", price: 999 };
