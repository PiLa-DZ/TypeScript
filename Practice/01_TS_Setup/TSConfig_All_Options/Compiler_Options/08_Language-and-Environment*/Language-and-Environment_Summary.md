Language-and-Environment  (code will run in (Node.js version, browser, etc.))

    Language-and-Environment_Options (target, lib, useDefineForClassFields, experimentalDecorators, emitDecoratorMetadata, moduleDetection)

```JSON
{
  "compilerOptions": {
    /* Language and Environment Options */
    "target": "ES2022",              // The version of JavaScript output. ES2022 is perfect for modern Node.js.
    "lib": ["ES2022"],               // Specifies which type definitions are included. We leave out 'DOM' because this is a backend project.
    "useDefineForClassFields": true, // Standardizes how class properties work. Best to keep true for future-proofing.
    "experimentalDecorators": false, // Enables the @Decorator syntax. and Essential if you use frameworks like NestJS or TypeORM. Otherwise, keep them false.
    "emitDecoratorMetadata": false,  // Essential if you use frameworks like NestJS or TypeORM. Otherwise, keep them false.
    "moduleDetection": "force"       // Ensures every file is treated as an independent module.
  }
}
```


1. target:
    What it is: Defines which version of JavaScript the compiler outputs.
    Backend Choice: For a modern Node.js project (version 20+), set this to ES2022 or ESNext. This ensures you use modern features like await at the top level.

2. lib:
    What it is: Tells TypeScript which "built-in" APIs you have access to.
    Backend Choice: Since you aren't in a browser, you include ["ES2022"]. If you were a frontend dev, you would add "DOM".

3. useDefineForClassFields: 
    Switches to a newer, standard-compliant way of handling class properties. (Recommended: true).

4. experimentalDecorators: 
    Enables the @Decorator syntax. 
    Essential if you use frameworks like NestJS or TypeORM. Otherwise, keep them false.

5. emitDecoratorMetadata:
    Saves type information about the decorators so they can be read at runtime. (Essential for Dependency Injection).
    Essential if you use frameworks like NestJS or TypeORM. Otherwise, keep them false.

6. moduleDetection:
    Ensures every file is treated as an independent module.
    Determines if a file is treated as a "script" (global variables) or a "module" (imports/exports). Set to force in modern projects to ensure every file is a module.
