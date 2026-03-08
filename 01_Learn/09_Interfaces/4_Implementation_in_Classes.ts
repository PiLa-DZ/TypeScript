// 5. Implementation in Classes
// In the roadmap's "Classes" section, you'll see that Interfaces act as blueprints for classes using the implements keyword.

interface Database {
  connect(): void;
  disconnect(): void;
}

class MariaDB implements Database {
  connect() { console.log("Connected to MariaDB"); }
  disconnect() { console.log("Disconnected"); }
}
