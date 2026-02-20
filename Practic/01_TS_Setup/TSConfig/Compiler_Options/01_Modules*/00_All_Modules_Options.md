The Modules category is the "Traffic Controller" of your project. 
It defines how files find each other 
and how import / export statements are handled.

For a backend developer using Node.js, 
this is where you solve the infamous "Cannot find module" errors.

1. The Core Strategy (The "Big Ones")

    module:           Sets the output format. For modern Node.js, you usually use NodeNext or ESNext.
    moduleResolution: The algorithm used to find files. NodeNext is the modern standard for Node projects.
    rootDir:          The "source of truth" folder. It preserves your folder structure when moving from src to dist.
    baseUrl:          The starting point for non-relative module names (e.g., importing from app/models instead of ../../models).

2. Path Mapping & Discovery

    paths:          Allows you to create "aliases." For example, you can map @models/* to src/models/* so your imports look cleaner.
    rootDirs:       Allows you to treat multiple folders as if they were one single "virtual" directory.
    noResolve:      Prevents TypeScript from adding files to your project just because they were mentioned in an import. You must explicitly include them.
    moduleSuffixes: Tells the compiler to look for specific file extensions like index.ios.ts or index.web.ts.

3. Types & Definitions

    typeRoots: Lists the folders that contain type definitions (defaults to ./node_modules/@types).
    types:     If you only want to include specific global types (like node and jest) and ignore others, you list them here.

4. Modern Extensions & JSON

    resolveJsonModule:               Allows you to import a .json file directly into your TypeScript code.
    allowImportingTsExtensions:      Allows you to import files using the .ts extension (usually used with specialized bundlers).
    allowArbitraryExtensions:        Allows you to import files with non-standard extensions (like .css or .svg) by looking for a declaration file.
    rewriteRelativeImportExtensions: (Newer) Helps fix extension mismatches when converting between TS and JS in ESM.

5. Advanced Package Handling

    resolvePackageJsonExports:    Forces TypeScript to respect the exports field in a library's package.json.
    resolvePackageJsonImports:    Respects the imports field (package-local aliases) in package.json.
    customConditions:             Allows you to set custom environmental conditions (like "development" vs "production") for resolving modules.
    noUncheckedSideEffectImports: A stricter check for imports that only exist for side effects (like import "polyfill"), ensuring the file actually exists.

6. Legacy & Global Support

    allowUmdGlobalAccess: Allows you to access UMD modules (which work in both browser and Node) as global variables.
