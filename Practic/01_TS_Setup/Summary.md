1. TSC (TypeScript Compiler)
2. TSX (TypeScript Execute)
3. TS-NODE (TypeScript E)



```Bash
npm init -y
npm pkg set type="module"

npm install typescript  --save-dev --verbose  # TypeScript Compiler
npm install @types/node --save-dev --verbose  # TypeScript Definitions For NodeJS
npm install tsx         --save-dev --verbose  # TypeScript Execute

npx tsc --init

mkdir src
touch src/index.ts


```
### TSConfig
```JSON
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
```
