- -------------------------------------------------------------------------------------------------------------------
### Decorator-Version
- -------------------------------------------------------------------------------------------------------------------
1. Check your tsconfig.json
- This is the "Control Room" of your project. 
- Open this file and look for a property called experimentalDecorators.
- If it is true: You are using the Legacy (Experimental) version. 
- This is what most MariaDB libraries like TypeORM or Sequelize currently require.
- If it is false or missing: You are likely using the Standard (Stage 3) version, 
- which TypeScript 5.0+ supports by default.
```JSON
{
  /* Metadata */
  "compilerOptions": {
    "experimentalDecorators": true, // <--- This is the "Old/Experimental" version
    "emitDecoratorMetadata": true  // Often used with database libraries
  }
}
```

- ------------------------------------------------------------
2. Check the Decorator "Arguments" (The Code)
- ------------------------------------------------------------
- The two versions have different "shapes" for their functions. 
You can tell which one you are using by looking at 
the parameters inside the decorator function itself.
The "Old" Way (Legacy)
The parameters are usually `(target, propertyKey, descriptor)`
```ts
function OldDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // If you see 'target' as 'any', it's the old version.
}
```
- ------------------------------------------------------------
- The "New" Way (Standard Stage 3)
The parameters are much cleaner. They use value and a special context object.
```ts
function NewDecorator(value: any, context: ClassMethodDecoratorContext) {
    // If you see 'context', it's the new official JavaScript version!
}
```
- ------------------------------------------------------------


- ------------------------------------------------------------
Experimental Decorator (old) (Stage 1 & 2)
Official     Decorator (new) (Stage 3 & 4)
- ------------------------------------------------------------
