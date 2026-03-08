1. Declaration Options (The "Header" Files)
    These are critical for building libraries or using Project References.

    declaration:         Generates .d.ts files (the "headers").
    declarationDir:      Changes where the .d.ts files are saved (if you want them separate from the .js files).
    declarationMap:      Generates a map for the .d.ts files. This allows "Go to Definition" in Neovim to jump all the way back to the .ts source instead of just the declaration file.
    emitDeclarationOnly: Only creates .d.ts files; no JavaScript files are generated at all.
    stripInternal:       Don't emit declarations for code that has an @internal JSDoc comment.

2. Source Map Options (The Debugger Links)
    These help your debugger (and Neovim) map the running JS back to your TS.

    sourceMap:       Generates a separate .js.map file.
    inlineSourceMap: Instead of a separate file, it embeds the map directly inside the .js file as a giant comment.
    inlineSources:   Embeds the actual .ts source code text inside the source map itself. (Useful if you want to debug on a machine that doesn't have your source code files).
    sourceRoot:      Specifies a custom URL or path where the debugger should look for the source files.
    mapRoot:         Specifies a custom URL or path where the debugger should look for the map files (instead of next to the JS).

3. Execution & Logic Options

    noEmit:             Does not generate any files. Use this for "Type Check Only" mode.
    noEmitOnError:      If your code has a single error, do not generate any JS files. This prevents you from shipping broken code.
    downlevelIteration: Provides a more robust (but slower) way to handle for...of loops and "spreads" when targeting older versions of JS (ES5/ES3).
    preserveConstEnums: Keeps const enum definitions in the generated code (normally they are removed and replaced by raw values for speed).

4. Helper & Library Options

    importHelpers: Instead of copying "helper" code (like async logic) into every single file, it imports them from a single library called tslib. (Reduces file size).
    noEmitHelpers: Tells TypeScript not to generate helper functions (like __extends) at all. You are responsible for providing them.

5. Filesystem & Formatting Options

    outDir:         The directory where all output files go.
    outFile:        Bundles all output into a single file (Only works with System or AMD modules—rarely used in modern Node.js).
    removeComments: Strips all comments from the output files to save space.
    newLine:        Force a specific end-of-line character (CRLF for Windows or LF for Unix).
    emitBOM:        Forces the compiler to write a Byte Order Mark (BOM) at the start of files (mostly for older Windows compatibility).
