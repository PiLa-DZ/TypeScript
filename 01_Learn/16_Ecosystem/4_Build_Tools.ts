// In the Node.js world, we usually divide these into Compilers/Bundlers and Task Runners.

// ============================================================
// 1. The "Compilers" (Transpilers)
// Node.js cannot run .ts files directly. You need a tool to strip away the types and turn them into .js.

// - tsc (The Official Compiler): The default. It's slow but very safe because it checks every type.
// - esbuild / swc: The new generation. They are written in Go and Rust (like Biome). They are blazing fast because they skip type-checking during the build and just transform the code.
// - tsup: A popular wrapper around esbuild specifically for TypeScript libraries and small backends. It’s "zero-config."

// ============================================================
// 2. Task Runners (Automation)
// Instead of typing npx tsc && node dist/index.js every time you change a line of code, you use a task runner to automate the "mundane and repetitive."

// ------------------------------------------------------------
// A. The "Built-in" Way: NPM Scripts
// Most backend devs use the scripts section of package.json. It is simple and works everywhere.
// "scripts": {
//   "dev": "ts-node-dev --respawn src/index.ts",
//   "build": "tsc",
//   "start": "node dist/index.js",
//   "lint": "eslint .",
//   "format": "prettier --write ."
// }

// ------------------------------------------------------------
// B. The "Advanced" Way: Turbo / Nx / Just
// If you have a large project (a Monorepo), simple scripts get slow.

// Turborepo: Caches your tasks. If you haven't changed the code, it won't re-run the tests or build; it just shows the previous result instantly.
// Just: A handy "command runner" (similar to a Makefile) that is great for Neovim users who like running commands from the terminal.

// ============================================================
// 3. The "Development Loop" (Hot Reloading)
// For your Express API, you don't want to manually restart the server every time you update a MariaDB query.

// ts-node-dev or tsx: These watch your files. When you save in Neovim, they instantly restart the server and apply your changes.
// nodemon: The classic choice. You can tell it to watch .ts files and run ts-node.

// ============================================================
// 4. Summary Table: Build Tool Comparison
// Tool Type    | Examples             | Best For...
// Compiler     | "tsc, swc"           | Turning TS into JS.
// Bundler      | "esbuild, tsup"      | Packaging your backend into one file.
// Dev Runner   | "ts-node-dev, tsx"   | Seeing changes instantly in Neovim.
// Task Runner  | "npm scripts, Turbo" | Automating the whole workflow.

// ============================================================
// 💡 Your Neovim Backend Workflow
// Since you're on a roll with your setup, here is how a pro uses these tools:

// Develop: You write code in Neovim.
// Dev Server: In a separate terminal (or a Neovim toggleterm), you have npm run dev running. It uses ts-node-dev to restart every time you hit :w.
// Check: Your ts_ls and eslint-lsp show you errors in real-time.
// Build: When ready for production, you run npm run build to generate the final JS for your server.

// ============================================================
