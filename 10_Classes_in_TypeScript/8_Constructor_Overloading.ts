// ============================================================
// 1. The Syntax: Signatures + Implementation
// You define one or more "Signatures" (without a body) to tell TypeScript what's allowed, and then one single "Implementation" that handles all the logic.

class Point {
  x: number;
  y: number;

  // 1. Overload Signatures
  constructor(x: number, y: number);
  constructor(s: string);

  // 2. The Implementation (must be compatible with all signatures)
  constructor(xOrS: number | string, y?: number) {
    if (typeof xOrS === "string") {
      const parts = xOrS.split(",");
      this.x = parseInt(parts[0]);
      this.y = parseInt(parts[1]);
    } else {
      this.x = xOrS;
      this.y = y ?? 0;
    }
  }
}

const p1 = new Point(10, 20);    // ✅ Valid
const p2 = new Point("10,20");   // ✅ Valid

// ============================================================
// 2. Real-World Backend Case: Database Models
// Imagine you have a User class. You might want to create a user by passing an Object (from a database row) or by passing individual Strings (from an Express form).

interface UserData {
  id: number;
  email: string;
}

class User {
  public id: number;
  public email: string;

  constructor(data: UserData);
  constructor(id: number, email: string);
  
  // Implementation
  constructor(idOrData: number | UserData, email?: string) {
    if (typeof idOrData === "object") {
      this.id = idOrData.id;
      this.email = idOrData.email;
    } else {
      this.id = idOrData;
      this.email = email!;
    }
  }
}
