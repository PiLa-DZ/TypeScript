// typeof_Operator
// Just like instanceof, typeof is original JavaScript, but TypeScript gives it a "double life" by allowing it to work in two different ways.

// ============================================================
// 1. The JavaScript Way (Runtime)
// This is used while your code is actually running. It checks the basic "primitive" type of a variable and returns a string.

let username = "Archie";
console.log(typeof username); // Prints: "string"

let port = 3306;
console.log(typeof port);     // Prints: "number"

// ============================================================
// 2. The TypeScript Way (Type Level)
// This is where it gets cool for your backend. 
// You can use typeof to extract a type from an existing variable. 
// This is great for when you have a complex configuration object and you want to use its shape elsewhere without re-typing it.

const defaultSettings = {
  host: "localhost",
  port: 3306,
  debug: true
};

// TS extracts the shape of 'defaultSettings' into a new Type Alias
type Settings = typeof defaultSettings;

/* Settings is now effectively:
  { host: string; port: number; debug: boolean; } 
*/

// ============================================================
// 3. Type Guarding (Narrowing)
// As we saw with instanceof, TypeScript uses typeof to "narrow" a Union Type. 
// This is the safest way to handle a variable that could be a string or undefined.

function printSize(input: string | number) {
  if (typeof input === "string") {
    // TS knows it's a string. Safe to use .length
    console.log(input.length);
  } else {
    // TS knows it's a number. Safe to use .toFixed()
    console.log(input.toFixed(2));
  }
}

// ============================================================
// 4. The "Gotcha": typeof null
// There is a famous bug in JavaScript that was never fixed to avoid breaking the internet:

console.log(typeof null); // Prints: "object" 
// Because of this, you cannot use typeof to check if something is null. 
// You should just check it directly: if (value === null).
console.log(null === null) // Prints: true
