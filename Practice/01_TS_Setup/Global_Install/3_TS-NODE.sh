sudo npm install ts-node    --save-dev --verbose
sudo npm install typescript --save-dev --verbose

# NOTE: You can't install @types/node in Global
npm install @types/node --save-dev --verbose # Install Definitions

# ===============================================================
# 4. How to use it (The 3 Modes)

# Direct Execution: To run a file once:
ts-node src/index.ts
# With nodemon (The "Old School" Watch Mode): Unlike tsx, ts-node does not have a built-in watch command. To get "Watch Mode," people usually pair it with a tool called nodemon:
npx nodemon --exec ts-node src/index.ts
# B. The REPL (Interactive Shell): This is where ts-node is actually quite cool. If you just type the command, it opens an interactive terminal where you can type TypeScript code and see results instantly (like a Python or Lisp shell).
ts-node
