// ============================================================
// 2. The Solution: satisfies
// Imagine you have a config object for your MariaDB connection:
type Config = {
  host: string;
  port: number | string; // Can be 3306 or "3306"
};

// The satisfies keyword checks that the object matches the Config type, but remembers exactly what you typed.
const dbConfig = {
  host: "localhost",
  port: 3306
} satisfies Config;

// SUCCESS: TS knows 'port' is a number because that's what we provided!
dbConfig.port.toFixed(); 

// BUT: It still validates. If we added an extra property not in Config, it would fail.
