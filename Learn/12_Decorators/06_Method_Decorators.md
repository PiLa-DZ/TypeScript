- -------------------------------------------------------------------------------------------------------------------
### Method-Decorators
- -------------------------------------------------------------------------------------------------------------------
- In your MariaDB project, this is how you would handle 
1. Logging
2. Transaction Management
3. Performance Timing
- -------------------------------------------------------------------------------------------------------------------
1. The Signature (The 3 Ingredients)
- a Method Decorator always takes three specific arguments:
```ts
function MyMethodDecorator(
  target: any,          // The Class Prototype
  propertyKey: string,  // The name of the method "saveToDb"
  descriptor: PropertyDescriptor // The "Internal Settings" of the method
) {
  // Logic goes here
}
class a {
  @MyMethodDecorator // This will works with method b
  b() {}
}
```
- -------------------------------------------------------------------------------------------------------------------
2. The "Descriptor": Your Control Panel

- The descriptor is the most important part. 
- It contains a property called value, 
- which is the actual function you wrote in your class.

- By capturing this value and replacing it, 
- you can "wrap" the original logic.
- -------------------------------------------------------------------------------------------------------------------
3. Let's build a "Query Timer"
- Let's create a decorator that measures exactly how long a MariaDB query takes to execute.

```ts
function MeasureTime(target: any, key: string, descriptor: PropertyDescriptor) {
  // 1. Save the original function
  const originalMethod = descriptor.value;

  // 2. Replace it with a new "Wrapper" function
  descriptor.value = function (...args: any[]) {
    console.log(`--- Starting method: ${key} ---`);
    const start = performance.now();

    // 3. Run the original function using .apply()
    const result = originalMethod.apply(this, args);

    const end = performance.now();
    console.log(`--- Finished ${key} in ${(end - start).toFixed(2)}ms ---`);

    return result;
  };
}

class Database {
  @MeasureTime
  saveUser(name: string) {
    // Simulate a DB delay
    for (let i = 0; i < 1000000; i++) {} 
    console.log(`User ${name} saved to MariaDB!`);
  }
}

const db = new Database();
db.saveUser("ProDev");
// Output:
// --- Starting method: saveUser ---
// User ProDev saved to MariaDB!
// --- Finished saveUser in 2.64ms ---
```
- -------------------------------------------------------------------------------------------------------------------
4. What is .apply(this, args)?
- You’ll see this line in almost every method decorator. It’s a bit of "JavaScript plumbing":
- this: Ensures that inside the function, the keyword this still points to your class instance (the Database object).
- args: Passes through whatever arguments were sent to the function (like the string "ProDev").
- Without this, your decorator would "break" the original function.
- -------------------------------------------------------------------------------------------------------------------
5. Async Methods (The MariaDB Reality)
- Since database queries are almost always async (returning a Promise), 
- your decorator needs to handle that too:
```ts
function LogAsync(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    console.log("Checking DB Connection...");
    const result = await original.apply(this, args); // Wait for the DB!
    console.log("Query complete.");
    return result;
  };
}
```
- -------------------------------------------------------------------------------------------------------------------
The MariaDB Repository Example
```ts
// 1. The Decorator (from your example)
function LogAsync(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    console.log(
      `\x1b[36m[DB-LOG] Checking Connection before ${key}...\x1b[00m`,
    );

    // Measuring the time for the "Query Complete" log
    const start = Date.now();

    // We 'await' the original function because it's a Promise
    const result = await original.apply(this, args);

    const end = Date.now();
    console.log(
      `\x1b[32m[DB-LOG] Query ${key} complete in ${end - start}ms.\x1b[00m`,
    );

    return result;
  };
}

// 2. The Class
class UserRepository {
  @LogAsync
  async findUserById(id: number) {
    // Simulating a MariaDB query delay (e.g., 500ms)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: id, username: "dev_user_2026", status: "Active" });
      }, 500);
    });
  }

  @LogAsync
  async deleteUser(id: number) {
    // Simulating a delete operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`User ${id} has been deleted.`);
      }, 300);
    });
  }
}

// 3. Execution
async function startApp() {
  const repo = new UserRepository();

  console.log("--- App Started ---");

  const user = await repo.findUserById(128);
  console.log("Data Received:", user);

  const status = await repo.deleteUser(128);
  console.log("Status:", status);
}

startApp();
// Output:
// --- App Started ---
// [DB-LOG] Checking Connection before findUserById...
// [DB-LOG] Query findUserById complete in 501ms.
// Data Received: { id: 128, username: 'dev_user_2026', status: 'Active' }
// [DB-LOG] Checking Connection before deleteUser...
// [DB-LOG] Query deleteUser complete in 301ms.
// Status: User 128 has been deleted.
```
- Why this is a "Pro" Move:
1. Cleaner Logic: 
    Notice that inside findUserById, 
    there is zero logging code. 
    The method focuses only on fetching data.
2. Context (this): 
    By using original.apply(this, args), 
    if your findUserById needed to use another property 
    in the class (like this.dbConnection), 
    it would still work perfectly.
2. Color Coding: 
    In the example, 
    I added some ANSI escape codes (like \x1b[32m) 
    so your terminal logs look colorful 
    and professional—common in backend development!
- -------------------------------------------------------------------------------------------------------------------
