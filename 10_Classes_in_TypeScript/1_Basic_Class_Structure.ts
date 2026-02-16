// Basic Class Structure
// In TypeScript, you must declare the types of your properties before you use them in the constructor.

class DatabaseService {
  // 1. Property declaration
  connectionString: string;

  // 2. Constructor
  constructor(uri: string) {
    this.connectionString = uri;
  }

  // 3. Methods
  connect(): void {
    console.log(`Connecting to ${this.connectionString}`);
  }
}

const db = new DatabaseService("mariadb://localhost:3306");
