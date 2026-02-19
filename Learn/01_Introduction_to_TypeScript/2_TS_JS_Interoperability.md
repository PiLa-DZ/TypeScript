If you add // @ts-check to the very first line of a .js file, VS Code will start highlighting errors as if it were a .ts file.
1. Why use it?
    Legacy Projects: If you have an old Express project in JS and you aren't ready to rename everything to .ts yet.
    Testing: If you want to quickly check a script for bugs without setting up a tsconfig.json.
2. How it works
    Even though it's a .js file, it uses JSDoc (comments) to understand types.
    ```JavaScript
    // @ts-check

    /** @type {number} */
    let port = 3000;

    port = "8080"; // Error: Type 'string' is not assignable to type 'number'
    // TypeScript will now flag this in your JS file!
    ```


TS_JS_Interoperability
TypeScript and JavaScript have full interoperability, meaning you can use TypeScript code in JavaScript projects and vice versa. TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

You can use JavaScript libraries in TypeScript projects by either including the JavaScript files directly or using type definitions for the library. Type definitions provide type information for JavaScript libraries, making it easier to use them in TypeScript.

On the other hand, you can use TypeScript code in JavaScript projects by simply compiling the TypeScript code into JavaScript. The generated JavaScript code can be used in any JavaScript environment, and it will work the same way as regular JavaScript code.

TypeScript's compiler also supports type checking for plain JavaScript code by adding the // @ts-check comment at the top of a file. This allows the compiler to validate types by inspecting the JSDoc comments:

// @ts-check

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
