- TypeScript looks at your decorator function's signature. 
- If it sees 3 arguments, 
- it knows it's a method or property; 
- if it sees only 1, it knows it's a class.

1. Class Decorator (1 Argument)
    - It only receives the constructor (the "factory" itself).
    ```ts
    function isEntity(constructor: Function) { }
    ```
2. Method & Accessor Decorator (3 Arguments)
    - It receives the target (the class prototype), 
    - the name, 
    - the descriptor (the "settings" of the function).
    ```ts
    function log(target: any, key: string, descriptor: PropertyDescriptor) { }
    ```

3. Property Decorator (2 Arguments)
    - Properties do not have descriptors in the experimental version! They only get the target and the name.
    ```ts
    function column(target: any, key: string) { }
    ```

4. Parameter Decorator (3 Arguments)
    - It gets the target, 
    - the name of the method the parameter is in, 
    - the index (the position, 0 for the first argument)
    ```ts
    function required(target: any, key: string, index: number) { }
    ```
