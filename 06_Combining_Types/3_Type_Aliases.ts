// Type_Aliases
// A Type Alias is simply a way to give a name to a type. Think of it like creating a custom variable, but for a "shape" or a "rule" instead of a value.

// ============================================================
// 1. The Syntax
// You use the type keyword followed by an equals sign =.

type ID = string | number; // Aliasing a Union
type UserID = number;      // Aliasing a Primitive

let myId: ID = "usr_01";

// ============================================================
// 2. Why use them? (Cleanliness)
// Without aliases, your code becomes a mess of curly braces. Type aliases make it readable.

// Before (Messy): --------------------------------------------
function register1(user: { name: string; age: number; email: string }) { ... }

// After (Clean): ---------------------------------------------
type User = {
  name: string;
  age: number;
  email: string;
};

function register2(user: User) { ... }

// ============================================================
// 3. Real-World Backend Example
// When you start building your API, you'll likely create a types.ts file to hold aliases like this:
// Define the shape of a row in your MariaDB 'products' table
type Product = {
  id: number;
  slug: string;
  price: number;
  inStock: boolean;
};

// Use it in your Express route
app.get("/product", (req, res) => {
  const item: Product = { id: 1, slug: "arch-stickers", price: 5, inStock: true };
  res.json(item);
});





