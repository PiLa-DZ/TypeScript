### TypeScript Decorators Summary
Decorators are a special kind of declaration that can be attached to a
    class, 
    method, 
    accessor, 
    property, 
    parameter. 
They use the @expression syntax and act as "wrappers" that add extra logic or metadata to the target.

1.  How they work
    A decorator is just a function that is automatically called by the TypeScript compiler at runtime. It "intercepts" the target and can modify its behavior or log information.

2.  The Four Main Types
    Class: Target is Class, Parameters (constructor)
    Method: Target is Method, Parameters (target, key, descriptor)
    Property: Target is Variable, Parameters (target, key)
    Parameter: Target is Argument, Parameters (target, key, index)

3.  Key Concepts

  - Descriptor: In method decorators, this is the "power tool" used to read or rewrite the function logic.
  - Decorator Factory: A function that returns a decorator, allowing you to pass custom data (e.g., @Role('admin')).
  - Experimental: Must enable "experimentalDecorators": true in tsconfig.json.

4.  Why use them?

  - DRY (Don't Repeat Yourself): Move repetitive logic (logging, auth) out of functions.
  - Metadata: Essential for ORMs (like TypeORM) to map classes to database tables.
  - Clean Code: Keeps business logic separate from boilerplate code.
