// ============================================================
// 1. The Core Concept
// ESLint analyzes your code statically (without running it) to find problematic patterns.
// In TypeScript, it works alongside the compiler.
// While the compiler checks if the types are correct,
// ESLint checks if the code quality is up to standard.

// ============================================================
// 2. Why it’s Critical for Express/Node.js
// In a backend environment,
// certain mistakes are common but dangerous.
// ESLint can catch these automatically in Neovim:

// No Unused Variables: Prevents you from leaving sensitive data or heavy objects in memory.
// No Floating Promises: Tells you if you called a MariaDB query but didn't await it (a classic source of bugs).
// Prefer Const: Ensures you don't accidentally reassign a variable that should be immutable.

// ============================================================
// 3. Setting Up in your Neovim Ecosystem
// Since you use Mason.nvim, the setup is smooth:

// Install via Mason: :MasonInstall eslint-lsp
// Project Init: Run npm init @eslint/config in your project root.

// Choose: "To check syntax, find problems, and enforce code style."
// Choose: "JavaScript modules (import/export)."
// Choose: "TypeScript."

// ============================================================
// The .eslintrc.json (The Rulebook)
// This is where you define your standards. For a modern TS backend, it looks like this:
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "off" 
  }
}

// ============================================================
// 4. ESLint vs. Prettier (The Peace Treaty)
// Sometimes ESLint and Prettier argue. 
// For example, ESLint might want a semicolon and Prettier might not.

// The Fix: Use eslint-config-prettier. 
// It turns off all ESLint rules that might conflict with Prettier, 
// letting Prettier handle the "style" and ESLint handle the "logic."


