Emit (how TypeScript generates your output files)

    Emit_Options(outDir, noEmit, noEmitOnError, sourceMap, declaration, removeComments)

```JSON
{
  "compilerOptions": {
    /* Emit Options */
    "outDir": "./dist",           // Destination for compiled code
    "noEmit": false,              // Check your code for errors but will not create any files
    "noEmitOnError": true,        // Prevents broken code from being saved to the dist folder
    "sourceMap": true,            // (The Debugger Link) This creates .js.map files.
    "declaration": true,          // This tells TypeScript to generate .d.ts files (Declaration files).
    "removeComments": true        // Optimization 
  }
}
```

1. outDir (The Destination) this defines the folder where your .js files live.
2. noEmit (The "Dry Run") check your code for errors but will not create any files.
3. noEmitOnError (The "Safety Valve")
4. sourceMap (The Debugger Link) This creates .js.map files.
5. declaration (The "Header" Generator) This tells TypeScript to generate .d.ts files (Declaration files).
6. removeComments (The Cleaner)
