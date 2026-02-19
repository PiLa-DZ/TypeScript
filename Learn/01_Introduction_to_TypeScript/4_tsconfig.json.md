tsconfig.json
tsconfig.json is a configuration file in TypeScript that specifies the compiler options for building your project. It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:

target: the version of JavaScript to compile to.
module: the module system to use.
strict: enables/disables strict type checking.
outDir: the directory to output the compiled JavaScript files.
rootDir: the root directory of the TypeScript files.
include: an array of file/directory patterns to include in the compilation.
exclude: an array of file/directory patterns to exclude from the compilation.
Given below is the sample tsconfig.json file:
```TypeScript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```


// ============================================================
```TS
// tsconfig tells tsc exactly how to translate your code and where to put it.

// ============================================================
// 1. The "Big Three" Categories

// A. The Environment (Where is this running?)
// target: What version of JavaScript should the compiler output? (For Node.js, we usually pick ES2022 or ESNext).
// module: How should files talk to each other? (For modern Node, we use NodeNext or CommonJS).

// B. The File System (Where are the files?)
// rootDir: Where is your source code? (Usually ./src).
// outDir: Where should the translated JavaScript go? (Usually ./dist).

// C. The Strictness (How much should it yell at me?)
// strict: The "Master Switch." Turning this to true enables all type-checking safety features. This is your best friend for catching bugs before they hit your MariaDB database.

// ============================================================
// 2. A "Starter" Backend tsconfig.json
// Here is a solid, standard configuration for your Express project. I’ve commented it so you know exactly what each part does:
{
  "compilerOptions": {
    /* Basic Options */
    "target": "ES2022",           // Output modern JS that Node.js understands
    "module": "NodeNext",         // Use modern Node.js module resolution
    "outDir": "./dist",           // Put compiled files here
    "rootDir": "./src",           // Look for source code here
    
    /* Strictness */
    "strict": true,               // Enable all strict type-checking
    "noImplicitAny": true,        // Don't allow 'any' type if not specified
    
    /* Integration */
    "esModuleInterop": true,      // Fixes issues when importing CommonJS libraries (like Express)
    "skipLibCheck": true,         // Save time by not checking types of libraries (node_modules)
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],        // Only compile files in the src folder
  "exclude": ["node_modules"]     // Ignore the giant node_modules folder
}

// ============================================================
// 3. Why this matters for Neovim
// Your LSP (ts_ls) reads this file the moment you open Neovim.

// If you set target: "ES5", Neovim will highlight modern features (like async/await) as errors.
// If you don't set include, Neovim might not "see" all your files, and your "Go to Definition" (gd) might break.

// ============================================================
// 4. Common "Gotcha": esModuleInterop
// In the C++ world, 
// headers are straightforward. 
// In JavaScript, 
// there are two competing module systems (CommonJS and ESM).

// Express uses an older style. 
// If you don't set "esModuleInterop": true, 
// you will get errors when you try to do import express from 'express'. 
// This setting is the "peace treaty" between the two systems.
```
