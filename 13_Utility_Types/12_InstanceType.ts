// While ReturnType tells you what a function returns, 
// InstanceType tells you what a Class produces when you use the new keyword.

// ============================================================
// 1. The Real-World Problem

// In TypeScript, a Class actually has two "faces":
// - 1. The Constructor Type: The blueprint (the class itself).
// - 2. The Instance Type: The actual object created from that blueprint.

// Sometimes you are working with a function that takes a class as an argument 
// (like a Database Factory), 
// and you need to know what kind of object that class will create.

class DatabaseConnection {
  connect() { console.log("Connected to MariaDB"); }
}

// If I want to type a variable that holds a NEW connection:
let myConn: DatabaseConnection; // Easy.

// But what if I have a variable that holds the CLASS itself?
type ClassBlueprint = typeof DatabaseConnection;

// ============================================================
// 2. The Solution: InstanceType<T>
// InstanceType extracts the "object shape" from a constructor function or class type.

type ConnectionInstance = InstanceType<typeof DatabaseConnection>;

// Resulting ConnectionInstance: The shape of the object { connect: () => void }

// ============================================================
// 3. A Practical Backend Example: The "Generic Factory"
// In a professional backend, 
// you might have a "Manager" that initializes different services. 
// You can use InstanceType to make it completely type-safe.

class UserService {
  getAll() { return ["Ali", "Hamza"]; }
}

class PostService {
  getRecent() { return ["Post 1", "Post 2"]; }
}

// A function that takes ANY class and returns an instance of it
function createService<T extends new (...args: any[]) => any>(ServiceClass: T): InstanceType<T> {
  return new ServiceClass();
}

const users = createService(UserService); // Type is correctly inferred as UserService
const posts = createService(PostService); // Type is correctly inferred as PostService

users.getAll(); // ✅ TypeScript knows this method exists!



