// Useful Packages
// TypeScript has a large ecosystem of packages that can be used to extend the language or to add functionality to your project. Here is the list of some of the most useful packages.

// @article@zod: A TypeScript-first data validation library
// @opensource@ts-morph: A TypeScript-first API for manipulating TypeScript code
// @article@ts-node: A TypeScript execution and REPL for node.js
// @opensource@ts-jest: A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.
// @opensource@typesync: Install missing TypeScript typings for dependencies in your package.json.
// @opensource@tsd - TypeScript Definition Manager
// @opensource@type-fest - A collection of essential TypeScript types

// ============================================================
// 1. Zod: The Validator (Must-Have)
// TypeScript types disappear at runtime. If a user sends a string to your API when you expected a number, TypeScript can't stop them—but Zod can. It allows you to create a schema that acts as both a Runtime Validator and a TypeScript Type.

// Express Use Case: Validate the req.body before sending it to MariaDB.
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3),
  age: z.number().positive(),
});

// Zod automatically creates the TS Type for you!
type User = z.infer<typeof UserSchema>;

// ============================================================
// 2. ts-node & ts-jest: The Executioners
// TypeScript code cannot run directly in Node.js; it has to be compiled to JS first. These tools hide that process so you can work faster.
// ts-node: Runs your .ts files directly. Perfect for your dev script in Neovim so you can see changes instantly without a manual build step.
// ts-jest: Allows you to write unit tests for your Express controllers in TypeScript. It handles the "translation" so Jest understands your types.

// ============================================================
// 3. Type-Fest: The "Pro" Type Library
// Remember all those complex Recursive and Mapped types we learned? The creator of type-fest has already written the most difficult ones for you.
// Use Case: If you need a DeepRequired type or a Jsonify type for your MariaDB results, don't write it from scratch—just import it from type-fest.

// ============================================================
// 4. ts-morph: The Code Manipulator
// ts-morph is an advanced tool for "Meta-programming." It allows you to write a script that reads your TypeScript code and changes it.
// Backend Use Case: If you have 100 MariaDB models and you want to automatically add a deleted_at property to all of them, you can write a ts-morph script to do it in seconds.

// ============================================================
// 5. Utility Packages: Maintenance
// typesync: A lifesaver. You install express, but you forget @types/express. Running typesync scans your package.json and automatically adds all the missing @types for you.
// tsd: Used if you are writing your own library and want to test that your type definitions actually work.

// ============================================================
// Summary Table for your Project
// Package    | Role        | When to use it?
// zod        | Validation  | Every time you receive data from a user or DB.
// ts-node    | Runtime     | During local development (npm run dev).
// type-fest  | Types       | When standard Utility Types aren't enough.
// typesync   | Maintenance | After installing new npm packages.

// ============================================================
// 💡 Neovim Integration
// Since you are using Neovim:
// Zod is great because ts_ls will give you incredible autocomplete for your schemas.
// ts-node allows you to use plugins like iron.nvim or just a simple terminal toggle to run your current script with one keybinding.
