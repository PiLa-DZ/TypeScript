0. Setup Project
```Bash
npm init -y
npm pkg set type="module"
npm pkg set scripts.start="node dist/index.js"
npm pkg set scripts.dev="nodemon --exec tsx src/index.ts"
npm pkg set scripts.build="tsc"
npm install nodemon --save-dev --verbose
```

1. Install TypeScript and Type Definitions
```Bash
# Install TypeScript
npm install typescript --save-dev --verbose
# Install Definitions
npm install @types/node --save-dev --verbose
```
- typescript: The compiler itself (tsc).
- @types/node: This tells TypeScript about Node.js specific things (like process.env or the fs module) so it doesn't get confused.

2. Initialize the Configuration
- Generate your tsconfig.json file. 
    This file acts as the "brain" for 
    how TypeScript treats your code.
```Bash
npx tsc --init
```

3. Essential Config for Node 25 + ESM
- Since you are using "type": "module" and Node v25, 
    open your new tsconfig.json and 
    ensure these settings are active (uncommented):
```JSON
{
  "compilerOptions": {
    "target": "ESNext",         /* Latest JS features */
    "module": "NodeNext",       /* Required for modern Node ESM */
    "moduleResolution": "NodeNext",
    "outDir": "./dist",         /* Where the compiled JS goes */
    "rootDir": "./src",         /* Where your TS files live */
    "strict": true,             /* This is the "hard mode" that makes you a better dev */
    "skipLibCheck": true        /* Speeds up compilation */
  }
}
```

4. Create your first file
    1. Create a folder named src.
    2. Create a file src/index.ts.
    3. Add this code to test the compiler:
    ```TypeScript
    let greeting: string = "Hello, Arch Linux!";
    console.log(greeting);

    // Try to "break" it to see the error:
    // greeting = 42;
    ```

5. Compile and Run
- To turn your .ts into .js, run:
```Bash
npx tsc
```
- You will see a new dist/index.js file appear. 
    You can run it with node dist/index.js.

6. How to run this efficiently
```Bash
npm install tsx --save-dev
```
- Now you can run: 
```Bash
npx tsx src/index.ts 
```
- (It’s like node, but for TypeScript).
