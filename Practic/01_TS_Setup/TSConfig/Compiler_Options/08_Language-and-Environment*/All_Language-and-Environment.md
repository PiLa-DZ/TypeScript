Language-and-Environment  what environment your code will run in (Node.js version, browser, etc.)

1. The Core Environment

    target:
        What it is: Defines which version of JavaScript the compiler outputs.
        Backend Choice: For a modern Node.js project (version 20+), set this to ES2022 or ESNext. This ensures you use modern features like await at the top level.

    lib:
        What it is: Tells TypeScript which "built-in" APIs you have access to.
        Backend Choice: Since you aren't in a browser, you include ["ES2022"]. If you were a frontend dev, you would add "DOM".

    moduleDetection:
        Determines if a file is treated as a "script" (global variables) or a "module" (imports/exports). Set to force in modern projects to ensure every file is a module.

2. The Decorator Duo (The "Spring" Style)

    If you've used Java or C#, you'll recognize these. Many Node.js frameworks like NestJS or TypeORM (often used with MariaDB) require these.

    experimentalDecorators: Enables the @Decorator syntax.

    emitDecoratorMetadata: Saves type information about the decorators so they can be read at runtime. (Essential for Dependency Injection).

3. The JSX Group (The Frontend Suite)

    Since you are focusing on the backend, you likely won't touch these, but they are vital for React/Solid/Preact.

    jsx: Controls how JSX (HTML-in-JS) is transformed (e.g., preserve, react-jsx).

    jsxFactory: Changes the function used to create elements (default is React.createElement).

    jsxFragmentFactory: Changes the function for JSX fragments.

    jsxImportSource: Specifies the library used to import JSX helper functions (like react or preact).

    reactNamespace: An older way to set the jsxFactory.

4. Advanced & Edge Cases

    useDefineForClassFields: Switches to a newer, standard-compliant way of handling class properties. (Recommended: true).

    noLib: Tells TypeScript not to include the standard library. You would only use this if you were writing your own custom core library (rare!).

    libReplacement: A complex feature for replacing the standard library files with custom versions (mostly used by the TS team themselves).
