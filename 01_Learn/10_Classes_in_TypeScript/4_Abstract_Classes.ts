// Abstract Classes
// 1. The Core Rules
// No new:
// Shared Logic:
// Abstract Methods:

abstract class Database {
  // 1. Shared property (all databases have a name)
  constructor(public name: string) {}

  // 2. Real method (shared logic)
  logStatus() {
    console.log(`${this.name} is running.`);
  }

  // 3. ABSTRACT method (No code here!)
  // This is a "contract" for the children.
  abstract connect(): void;
}

class MariaDB extends Database {
  // TypeScript FORCES you to write the connect method here
  connect() {
    console.log("Connecting to MariaDB via port 3306...");
  }
}

// Error! "Cannot create an instance of an abstract class."
// const base = new Database("Generic");

const myDB = new MariaDB("Production_DB");
myDB.connect(); // Specific logic
myDB.logStatus(); // Shared logic
