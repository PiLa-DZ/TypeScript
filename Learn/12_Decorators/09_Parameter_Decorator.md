- -------------------------------------------------------------------------------------------------------------------
### Parameter-Decorator
- -------------------------------------------------------------------------------------------------------------------
you need a Method Decorator to be the "Boss" 
who reads the notes and decides whether to run the code or throw an error.

- -------------------------------------------------------------------------------------------------------------------
- They are unique because they don't actually 
- do anything to the parameter itself 
- (you can't change the value of the argument 
- before the function starts).
- -------------------------------------------------------------------------------------------------------------------
- Instead, 
- their entire purpose is to leave a note (metadata) saying: 
- "Hey, the 2nd argument of this function is special!"
- -------------------------------------------------------------------------------------------------------------------
1. The Signature (The 3 Ingredients)
- A Parameter Decorator takes three arguments:

```ts
function PD(
  target: any, // The Class Prototype
  methodName: string, // The name of the method the parameter belongs to
  index: number, // The position of the parameter (0, 1, 2...)
) {
  // Logic goes here
  console.log(index);
}
class a {
  b(@PD a: string, b: number, @PD c: boolean) {}
}
// Output:
// 2
// 0
```
- -------------------------------------------------------------------------------------------------------------------
- To run this, make sure you have import "reflect-metadata"; at the top of your file.
- The Full System: Validation Architecture
```ts
import "reflect-metadata";

const metadataKey = "required_params";

// 1. THE PARAMETER DECORATOR (The "Post-it Note")
// It just marks WHICH index is required.
function Required(target: any, methodName: string, index: number) {
  const existingParams: number[] = Reflect.getOwnMetadata(metadataKey, target, methodName) || [];
  existingParams.push(index);
  Reflect.defineMetadata(metadataKey, existingParams, target, methodName);
}

// 2. THE METHOD DECORATOR (The "Validator")
// It checks the notes before letting the method run.
function Validate(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // Read the "Post-it notes" we saved earlier
    const requiredIndices: number[] = Reflect.getOwnMetadata(metadataKey, target, key) || [];

    for (const index of requiredIndices) {
      if (args[index] === undefined || args[index] === null) {
        throw new Error(`Error in ${key}: Argument at position ${index} is required!`);
      }
    }

    // If everything is okay, run the original MariaDB logic
    return originalMethod.apply(this, args);
  };
}

// 3. THE USAGE (MariaDB Service)
class MariaDBService {
  
  @Validate
  saveUser(@Required id: number, name: string) {
    console.log(`✅ Success: Saving User ${name} (ID: ${id}) to MariaDB.`);
  }
}

// --- TESTING THE SYSTEM ---

const service = new MariaDBService();

// Test A: This works
service.saveUser(1, "Gemini"); 

// Test B: This will CRASH because 'id' (index 0) is missing!
try {
  service.saveUser(undefined as any, "Stranger");
} catch (err: any) {
  console.error("❌ Caught Error:", err.message);
}
```
- -------------------------------------------------------------------------------------------------------------------
- what is reflect-metadata
- reflect-metadata is used by ORMs, but it is not an ORM itself.
- Think of it this way:
- - MariaDB is the Warehouse (where data lives).
- - mysql2 is the Truck (it carries the data from your code to the warehouse).
- - TypeORM/Prisma is the Warehouse Manager (it decides how to organize the truck).
- - reflect-metadata is the Label Maker.

1. What is it exactly?
- reflect-metadata is a Polyfill 
- (a library that adds a feature to a language that doesn't have it yet).

- In standard JavaScript, 
- objects are "dumb"
- they don't know anything about themselves. 
- If you have a property age: number, 
- the JavaScript engine forgets it's a "number" as soon as it compiles. 

- reflect-metadata allows you to attach hidden information (metadata) 
- to classes and properties that stays there while the app is running.

2. Why do we need it for MariaDB?
- If you are building a database tool, 
- you need to know the Types of your class properties at runtime to build the SQL query.

- Without reflect-metadata:

```ts
class User {
  @Column
  age: number;
}
// The @Column decorator has NO IDEA that 'age' is a number. 
// It just sees the name "age".
```

- With reflect-metadata and emitDecoratorMetadata: true:
- TypeScript automatically "smuggles" the type into a secret cabinet. 
- The @Column decorator can then ask reflect-metadata: 
- "Hey, what is the design-time type of 'age'?" 
- and the library answers: "It's a Number!" 
- Now, your code knows to create an INT column in MariaDB.
- -------------------------------------------------------------------------------------------------------------------
