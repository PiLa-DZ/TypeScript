// In backend development, data integrity is everything. 
// Readonly ensures that once an object is created 
// (like a configuration file or a record fetched from MariaDB), 
// no part of your code can accidentally change its values.

// ============================================================
// 1. The Real-World Problem
// Imagine you fetch a SystemConfig object from your database. This contains critical settings like the database port. If a junior developer (or a buggy function) accidentally changes that value in memory, your whole app could crash.

interface Config {
  dbHost: string;
  dbPort: number;
}

const myConfig: Config = {
  dbHost: "localhost",
  dbPort: 3306
};

// ⚠️ DANGER: Someone accidentally changes this!
myConfig.dbPort = 8080;

// ============================================================
// 2. The Solution: Readonly<T>
// By wrapping the type in Readonly, TypeScript will treat every property as if it had the readonly keyword in front of it.

const secureConfig: Readonly<Config> = {
  dbHost: "localhost",
  dbPort: 3306
};

// ❌ ERROR: TypeScript blocks this immediately
secureConfig.dbPort = 8080; 
// Error: Cannot assign to 'dbPort' because it is a read-only property.

// ============================================================
// 4. Why use this in your MariaDB/Express Backend?
// -- 1 API Responses: When you send data to a function that logs or processes it, use Readonly to guarantee that the processing function doesn't mutate the data.
// -- 2 Environment Variables: Things like PROCESS.ENV values should be stored in a Readonly object.
// -- 3 Domain Logic: If you have a "Point in Time" record (like an Invoice or a Transaction), it should never change once it's created. Readonly enforces this rule.






