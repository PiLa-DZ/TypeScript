```TS
/*
|===================================================================================================|
| Interface_vs_Type-Alias                                                                           |
|                                                                                                   |
|===================================================================================================|
| Feature               Interface                            Type Alias                             |
| ____________________|____________________________________|_______________________________________ |
| Object Shape        | Designed specifically for objects. | "Can be objects, primitives, unions."  |
| Declaration Merging | Yes (You can add fields later).    | No (Cannot be changed once defined).   |
| Extending           | Uses the extends keyword.          | Uses Intersections (&).                |
| Performance         | Faster for the compiler to check.  | Slightly slower in massive projects.   |
| Errors              | Usually provides clearer error     | Can sometimes produce complex blob err |
|                                                                                                   |
|===================================================================================================|
*/
```
2. When to use Type Aliases
    Types are your "Swiss Army Knife." Use them when you are doing anything involving logic, math, or specific combinations that aren't just a simple object.
    1. Unions: type Status = "pending" | "approved" | "rejected";
    2. Tuples: type Coordinates = [number, number];
    3. Primitives: type Email = string;
    4. Intersections of non-objects: type Name = string & { length: number };
3. When to use Interfaces
    Interfaces are your "Blueprints." Use them for the structural pillars of your application.
    1. Database Models: Defining the columns in your MariaDB tables.
    2. Public APIs: Defining what your service accepts and returns.
    3. Class Definitions: Using the implements keyword to ensure a class follows a specific structure.
4. The "Declaration Merging" Factor
    This is the "Dealbreaker" difference. If you are building a library or a shared middleware for Express, you almost always want to use Interfaces.
    ```TS
    // File A
    interface Request {
      body: any;
    }

    // File B (later in the project)
    interface Request {
      user?: { id: string }; 
    }

    // Result: 'Request' now has both body AND user.
    // This is IMPOSSIBLE with Type Aliases.
    ```
5. Why Performance Matters (The "Junior vs. Senior" bit)
TypeScript's compiler is optimized for Interfaces. 
When an interface extends another, the compiler caches the result. 
When you use a Type Intersection (&), the compiler has to re-calculate the combined shape every time it checks it. 
In a massive backend project with thousands of lines, using interfaces makes your IDE run noticeably faster.
