# 1. What is ts-node? ts-node is a TypeScript execution engine for Node.js. Just like tsx, it allows you to run .ts files directly without manually running tsc first.
# 2. The Key Difference: ts-node uses the actual TypeScript Compiler (tsc) by default. This means it actually checks your types while it runs the code.
# 3. How to install it:
npm install ts-node    --save-dev --verbose
npm install typescript --save-dev --verbose

# ===============================================================
# 4. How to use it (The 3 Modes)

# Direct Execution: To run a file once:
npx ts-node src/index.ts
# With nodemon (The "Old School" Watch Mode): Unlike tsx, ts-node does not have a built-in watch command. To get "Watch Mode," people usually pair it with a tool called nodemon:
npx nodemon --exec ts-node src/index.ts
# B. The REPL (Interactive Shell): This is where ts-node is actually quite cool. If you just type the command, it opens an interactive terminal where you can type TypeScript code and see results instantly (like a Python or Lisp shell).
npx ts-node
