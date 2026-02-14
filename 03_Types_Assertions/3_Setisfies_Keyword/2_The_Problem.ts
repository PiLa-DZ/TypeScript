// ============================================================
// . The Problem: as vs. Type Annotations
// Imagine you have a config object for your MariaDB connection:
type Config = {
  host: string;
  port: number | string; // Can be 3306 or "3306"
};

// If we use regular type annotation:
const dbConfig: Config = {
  host: "localhost",
  port: 3306
};

// PROBLEM: TypeScript now thinks 'port' is (number | string).
// It forgot that we specifically put a NUMBER in there.
// dbConfig.port.toFixed(); // ERROR: .toFixed() doesn't exist on string


