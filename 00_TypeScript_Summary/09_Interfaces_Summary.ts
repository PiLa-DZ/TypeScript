// 1. Interfaces_Syntax
interface User { id: number; }
const newUser: User = { id: 1 };

// 2. Extending_Interfaces (Inheritance)
interface Person { name: string; }
interface Employee extends Person { salary: number; role: "admin" | "editor"; }

// 3. Declaration_Merging (If you define the same interface twice)
interface Product { name: string; }
interface Product { price: number; }
const item: Product = { name: "Laptop", price: 999 };

// 4. Implementation_in_Classes (class class_name implements interface_name)
interface Database { connect(): void; }
class MariaDB implements Database {
  connect() { console.log("Connected to MariaDB"); }
}

// 5. Interface_vs_Type-Alias 
// Inheritance For (objects)
// Type-Alias  For (objects, primitives, unions)

// 6. Hybrid_Types 
// Because JavaScript functions are technically objects

