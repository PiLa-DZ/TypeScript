// Truthiness_Narrowing
// In JavaScript (and therefore TypeScript), 
// values like 
// 0, 
// NaN, 
// "" (empty string), 0n (bigint zero), 
// null, 
// and undefined 
// all coerce to false. 
// Everything else is true.

// ============================================================
// 1. The Basic Truthiness Check
// This is the most common way to handle optional data in a backend API.

function printUsername(name: string | null | undefined) {
  if (name) {
    // Narrowed: name is definitely a 'string'
    // Because null and undefined are "falsy"
    console.log(`Hello, ${name.toUpperCase()}`);
  } else {
    // name is null, undefined, or ""
    console.log("Hello, Guest");
  }
}

// ============================================================
// 2. The Danger: The "Zero" Bug
// Since you are working with MariaDB, you’ll often handle numbers (like stock_count or price). 
// Truthiness narrowing can bite you here because 0 is falsy.

function updateStock(count: number | undefined) {
  if (count) { 
    // WARNING: If count is 0, this block is skipped!
    // This is a common bug in inventory systems.
    console.log("Updating stock...");
  }
}

// The Fix: Use Equality Narrowing instead: if (count !== undefined).

// ============================================================
// 3. Boolean Coercion (!!)
// Sometimes you want to convert a value to a literal boolean type. 
// You’ll see this a lot in professional codebases.

let input: string | null = "Archie";

const hasInput = !!input; // type: boolean, value: true

// ============================================================
// 4. Narrowing with Logical Operators
// You don't always need an if statement. You can use && (AND) or || (OR) to narrow types inline.

function printTags(tags: string[] | null) {
  // If tags is truthy, we call map. If not, the line stops.
  tags && tags.map(t => console.log(t));
}

