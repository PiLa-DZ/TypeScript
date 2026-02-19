Summary:
1. The Primitives Types (string, number, boolean)
2. The Collections      (Array, Tuples, Objects)
3. The "Empty" Types    (undefined, null, void)
4. The "Safety" Types   (any, unknown)
5. Union Type           (The "OR" logic)

More Details:
1. The Primitives Type
    - These are straightforward and handle 90% of your data.
    1. string: For text. 
        ```TypeScript
        let email: string = "dev@archlinux.org";
        ```
    2. number: For integers and floats 
        (TS doesn't distinguish between them). 
        ```TypeScript
        let port: number = 3000;
        ```
    2. boolean: True or false. 
        ```TypeScript
        let isActive: boolean = true;
        ```

2. The Collections
    - Array: You must define what is inside the array.
        ```TypeScript
        let tags: string[] = ["node", "express"]; 
        // Or the alternative syntax:
        let scores: Array<number> = [10, 20, 30];
        ```
    - Tuples (The "Fixed" Array)
        - A Tuple is a special TypeScript collection. It is an array with a fixed number of elements where you know exactly what type is at each specific position.
        - Syntax: [type, type, ...]
        - Use Case: Representing a Latitude/Longitude pair or a Database Record row.
        ```TypeScript
        let connection: [number, string]; 
        connection = [3306, "localhost"]; // Valid
        // connection = ["localhost", 3306]; // ERROR: Wrong order!
        ```
    3. Objects (The "Shape" of Data)
        - While JS has objects, TS collections of objects are defined by their "shape." In backend dev, this is how you represent a row in a table.
        - Use Case: A User, a Post, or a Server Configuration.
        ```TypeScript
        let user: { id: number; name: string } = {
            id: 1,
            name: "Archie"
        };
        ```


3. The "Empty" Types
    - null & undefined: In JS, these are values. In TS, 
        they are also types. 
        You’ll use these a lot with Prisma when a record isn't found.
    - void: Used mostly for functions that don't return anything 
        (like a console.log helper).
        ```TypeScript
        function logMessage(msg: string): void {
            console.log(msg);
        }
        ```

4. The "Safety" Types (Crucial for Backend)
    - any: The "I don't care" type. It turns off TypeScript for that variable.
        Warning: Avoid this! If you use any, 
        you're basically just writing JavaScript again.
    - unknown: Use this when you genuinely don't know what the data is 
        (like an API response from a third party). 
        It’s safer than any because TS will force you to 
        check what it is before using it.

5. Union Type
    ```TypeScript
    id = 101;       // Valid
    let id: string | number;
    id = "A-101";   // Valid
    // id = true;      // ERROR: Boolean is not part of the Union

    let serverStatus: "online" | "offline" | "maintenance";
    serverStatus = "online";      // Works
    // serverStatus = "hacking";     // ERROR: You can't just make up a status!
    ```
