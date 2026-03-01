```JSON
{
  "compilerOptions": {
    "outDir": "./dist",           // Put compiled files here
}
```
outDir (Where to generate JavaScript files)

The outDir option is the most important "Emit" setting for a backend developer 
because it keeps your project folder from becoming a mess.

1. What is outDir?
By default, 
    if you don't set an outDir, 
    TypeScript will drop the generated .js files right next to your .ts files.

Imagine 
    your src folder with 50 files. 
    Without outDir, 
    you'd suddenly have 100 files (50 .ts and 50 .js) all mixed together. 
    It’s a nightmare to manage.

outDir 
    tells the compiler: 
    "Take all the generated JavaScript and put it in this specific folder, 
    away from my beautiful source code."

2. The Standard Setup
For your Express and MariaDB project, 
the industry standard is to use a folder named dist 
(short for distribution) or build.
```JSON
{
  "compilerOptions": {
    "rootDir": "./src",   // Where to look
    "outDir": "./dist"    // Where to save
  }
}
```

3. How it works with rootDir
tsc looks at the structure inside rootDir.
It recreates that exact same structure inside outDir.
If you have src/models/user.ts, it becomes dist/models/user.js. 
    This is critical because it means your relative import paths 
    (like import { db } from "../db") 
    will still work perfectly in the compiled code.

4. Other Important "Emit" Options

noEmit:
    What it does: TypeScript checks your code for errors but doesn't create any JS files.
    Why use it?   Great for a "Type Check" step in your CI/CD pipeline or if you are using a different tool (like Vite or esbuild) to actually generate the JS.

listEmittedFiles:
    What it does: Prints the names of all the files it created in the terminal.
    Why use it?   Useful for debugging if you can't figure out where your files are going.

emitDeclarationOnly:
    What it does: Only creates .d.ts files (headers) and no .js files.
    Why use it?   Used when you are building a library for other people to use.

💡 The "Clean" Pro-Tip
TypeScript is great at creating files in your outDir, but it’s bad at deleting them. If you delete a .ts file in your src, the old .js version will still be sitting in your dist folder.
Always run a "clean" command before you build for production:
```Bash
rimraf dist && tsc
```
