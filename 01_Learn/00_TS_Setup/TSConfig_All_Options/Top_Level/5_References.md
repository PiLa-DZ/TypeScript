1. What is the goal of references?
    In a standard project, 
    tsc compiles everything in one go. 
    As your backend grows 
    (e.g., adding a separate folder for "Shared Utilities" or "Database Models"), 
    compiling the whole thing every time becomes slow.

    references allows you to:
        Encapsulate: Keep different parts of your code isolated.
        Speed Up:    TypeScript only re-compiles the pieces that actually changed (Incremental Build).
        Organize:    Separate your "Core Logic" from your "Express API."

2. How it works
    To use references, 
    you need a Multi-Config setup.

    Imagine this structure:

    ```Plaintext
    /my-app
    ├── package.json
    ├── tsconfig.json (The "Master" or "Solution" config)
    ├── /common (Shared types/logic)
    │   └── tsconfig.json
    └── /api (Your Express app)
        └── tsconfig.json
    ```

    In your Master tsconfig.json, you point to the sub-projects:

    ```JSON
    {
      "files": [],
      "references": [
        { "path": "./common" },
        { "path": "./api" }
      ]
    }
    ```

3. The "Composite" Requirement
    For a sub-project to be used in a reference, 
    its own tsconfig.json must have a special setting enabled:

    ```JSON
    {
      "compilerOptions": {
        "composite": true,
        "declaration": true
      }
    }
    ```
    composite:   Tells TypeScript this project is part of a larger system.
    declaration: Generates .d.ts files (like .h headers) so other projects can see its types without re-reading all the source code.

4. Why use this for your MariaDB/Express project?
    You might not need this on day one, 
    but as you grow, 
    you might want to separate:

    shared/:  Contains interfaces for your Database records.
    scripts/: One-off scripts to migrate your MariaDB tables.
    server/:  The actual Express code.

    By using references, if you change a script in the scripts folder, TypeScript won't re-verify your entire Express server. It only checks the script.


5. 💡 Pro-Tip: The "Build" Command

    When you use references, you don't just run npx tsc. You use the Build Mode flag:

    ```Bash
    npx tsc --build
    # or
    npx tsc -b
    ```

    This tells tsc to look at the references graph and figure out which sub-projects need to be updated in the correct order.

    One Small Detail for your package.json
    ```Bash
    # Standard Project: 
    npx tsc
    # Referenced Project: 
    npx tsc --build # (or -b)
    ```
