# 7-day, 1-hour-per-day roadmap

## Day 1: The "Why" and Basic Types
1. Goal: Understand how TS sits on top of JS and learn primitive types.
1. Concepts: Basic types (string, number, boolean, any, unknown, void).
1. Hands-on: Initialize a folder with 
                npm init -y and npx tsc --init. 
                Create a test.ts file and intentionally assign a number to a string variable to see the compiler "yell" at you.
1. Key Insight: TypeScript is a compile-time tool; 
    it disappears once the code is converted to JavaScript.

## Day 2: Objects, Interfaces, and Aliases
1. Goal: Learn how to define the "shape" of your data.
1. Concepts: interface vs. type, optional properties (?), and readonly properties.
1. Hands-on: Create a User interface for your MariaDB records. 
    Define nested objects like address or preferences.
1. Practice: Try extending an interface (e.g., an Admin interface that extends User).

## Day 3: Functions and Arrays
1. Goal: Make your logic predictable.
1. Concepts: Typing function parameters, return values, and array types (e.g., string[] or Array<number>).
1. Hands-on: Rewrite a basic JS "sum" function or a "findUserById" function with proper type annotations.
1. Practice: Use Union Types (e.g., id: string | number) for functions that can accept multiple formats.

## Day 4: Setting up the Express + TS Environment
1. Goal: Migrating your Express 5 setup to TypeScript.
1. Setup: 1. Install types: npm install -D @types/node @types/express. 2. Update package.json: Set "type": "module". 3. Use tsx (the modern successor to ts-node) for fast development: npm install -D tsx.
1. Hands-on: Convert your app.js to app.ts. Use import express, { Request, Response } from 'express';.

## Day 5: Prisma 6 + TypeScript (The "Magic")
1. Goal: Experience why Prisma + TS is the "gold standard" for backends.
1. Concepts: Auto-generated types from prisma generate.
1. Hands-on: Run npx prisma generate. In your code, hover over a query result (e.g., const user = await prisma.user.findUnique(...)).
1. Observation: Notice how VS Code gives you perfect auto-completion for your MariaDB table columns because Prisma created the types for you.

## Day 6: Advanced Narrowing and Generics
1. Goal: Handle complex logic safely.
1. Concepts: Type Guarding (if (typeof x === 'string')), Type Aliases, and a brief look at Generics (<T>).
1. Hands-on: Create a generic API response wrapper.
```TypeScript
interface ApiResponse<T> {
  data: T;
  status: string;
}
```

## Day 7: Error Handling and "Strict" Mode
1. Goal: Polish and Best Practices.
1. Concepts: Handling try/catch errors (which are unknown by default), configuring tsconfig.json (set strict: true).
1. Hands-on: Go through your app.ts and ensure there are zero any types. Refactor your error-handling middleware to use TS interfaces.
