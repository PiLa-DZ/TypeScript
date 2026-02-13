ts-node skips that manual middle step by allowing you to run TypeScript files directly from your terminal.

Key Features
JIT Compilation: It compiles your code "Just-In-Time" every time you run the command.
REPL Support: You can type ts-node into your terminal to get an interactive TypeScript shell (similar to typing node).
Seamless Integration: It automatically picks up your tsconfig.json settings.
Development Speed: It eliminates the need to manage a /dist or /out folder during the early stages of a project.

-- ----------------------------------
The Workflow Comparison

Traditional Method (tsc)               
1. Write index.ts                      
2. Run tsc index.ts (creates index.js) 
3. Run node index.js,Done.
4. Delete .js files (optional),

Using ts-node
1. Write index.ts
2. Run ts-node index.ts
-- ----------------------------------

When to Use It (and When Not to)
⚠️ Important Note: While ts-node is a lifesaver for development, it is not recommended for production. Because it compiles code on the fly, it is slower and consumes more memory than running pre-compiled JavaScript.
Use it for: Local development, writing build scripts, testing small snippets, or running automated tests (like with Vitest or Jest).
Avoid it for: High-traffic production servers. For production, always use tsc to build your project and run the optimized .js files with standard node.

Getting Started
If you have Node.js installed, you can try it out by running:
```Bash
# Install it
npm install -g ts-node typescript
# Run a file
ts-node script.ts
```
