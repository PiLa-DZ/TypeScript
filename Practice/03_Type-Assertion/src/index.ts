// == AS ======================================================
let someData: unknown = "this is a string";
// let len = someData.length; // ERROR
let len = (someData as string).length; // SUCCESS

// == AS Any ==================================================
let a: number = 22;
let b: string[] = a as any;

// == AS Const ================================================
let version = "25.6.0"; // Type is: string
let versionConst = "25.6.0" as const; // Type is: "25.6.0" (The specific string)

const databaseConfig = { host: "localhost", port: 3306 } as const;
// databaseConfig.port = 3307; ERROR: Cannot assign to 'port' because it is a read-only property.

// == Not-Null ================================================
let c: string | null = "Archie";
// If you are 100% sure it's not null:
console.log(c!.toUpperCase());

// == Setisfies-Keyword =======================================
// . The Problem: as vs. Type Annotations
// Imagine you have a config object for your MariaDB connection:
type Config = { port: number | string /* Can be 3306 or "3306" */ };

// If we use regular type annotation:
const dbConfig1: Config = { port: 3306 };

// PROBLEM: TypeScript now thinks 'port' is (number | string).
// dbConfig1.port.toFixed(); // ERROR: .toFixed() doesn't exist on string

// ------------------------------------------------------------
// 2. The Solution: satisfies
// The satisfies keyword checks that the object matches the Config type, but remembers exactly what you typed.
const dbConfig2 = { port: 3306 } satisfies Config;
dbConfig2.port.toFixed(); // SUCCESS: TS knows 'port' is a number because that's what we provided!
