// Access Modifiers (The "Big Three")
// This is where TypeScript really shines for backend security. It allows you to control who can see or change your class data.

// public (default): Accessible from anywhere.
// private: Only accessible inside this specific class.
// protected: Accessible inside this class and any class that extends (inherits) it.

class User {
  public username: string;      // Everyone can see
  private hashedPw: string;     // Only the User class can see
  protected internalId: number; // User and its "children" (like Admin) can see

  constructor(name: string, pw: string, id: number) {
    this.username = name;
    this.hashedPw = pw;
    this.internalId = id;
  }
}

// ============================================================
// Parameter Properties (Shortcut)
// As a dev, you'll get tired of declaring properties twice (once at the top, once in the constructor). TypeScript has a "cheat code" for this:

class Product {
  // Adding the modifier (public/private) directly in the constructor 
  // tells TS to automatically create and assign the property.
  constructor(public name: string, private price: number) {}
}

const item = new Product("Mechanical Keyboard", 150);
console.log(item.name); // ✅ Works
// console.log(item.price); // ❌ Error: Property 'price' is private
