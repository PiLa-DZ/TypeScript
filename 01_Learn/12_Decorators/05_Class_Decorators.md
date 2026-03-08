- -------------------------------------------------------------------------------------------------------------------
### Class-Decorators
- -------------------------------------------------------------------------------------------------------------------
1. The Signature
- A Class Decorator is the simplest one. It receives exactly one argument: the constructor function of the class.
```ts
function LogClass(constructor: Function) {
  console.log("Class defined:", constructor.name);
}

@LogClass
class User {}

@LogClass
class Product {
  constructor(public name: string) {}
}

// Output:
// Class defined: User
// Class defined: Product
```

- -------------------------------------------------------------------------------------------------------------------
2. The Power: "Adding" Features without writing code
- Imagine you want every MariaDB model to have a createdAt timestamp, 
- but you don't want to manually write it in every class. 
- You can use a Class Decorator to extend the class.

```ts
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

@CreatedAt
class Product {
  constructor(public title: string) {}
}

const p = new Product("Mechanical Keyboard") as any;
console.log(p.title);     // "Mechanical Keyboard"
console.log(p.createdAt); // ✅ The decorator added this!

// ------------------------------------------------------------
// The "Constructor Type": { new (...args: any[]): {} }
// In TypeScript, 
// a Class is actually two things: 
// 1. the Instance (the object you create) 
// 2. the Constructor (the factory that makes it).
// ------------------------------------------------------------
// When we write a Class Decorator that returns a new class, 
// we need to tell TypeScript: 
// - "I am expecting a function that is capable of being called with the new keyword."
// ------------------------------------------------------------
// Breaking down the parts:
// 1. new              --> This tells TS this isn't a regular function; it’s a constructor.
// 2. (...args: any[]) --> This means the constructor can take any number of arguments of any type.
// 3. : {}             --> This means the constructor returns an object.
// ------------------------------------------------------------
// In plain English: 
// - This is a "Type" that describes any class in existence. 
// - By using this, 
// - your decorator becomes a "Universal Class Wrapper."
```

- -------------------------------------------------------------------------------------------------------------------
3. The MariaDB Scenario: "Entity Registration"
- This is exactly how libraries like TypeORM work. 
- They use a Class Decorator to "tell" the database driver that this class exists.
```ts
const tableRegistry: string[] = [];

function Entity(tableName: string) {
  return function (constructor: Function) {
    // We register the class name or a custom table name
    tableRegistry.push(tableName);
    console.log(`Registered ${constructor.name} to table: ${tableName}`);
  };
}

@Entity("users_table")
class User {}

@Entity("products_table")
class Product {}

console.log("Tables to create in MariaDB:", tableRegistry);

// Output:
// Registered User to table: users_table
// Registered Product to table: products_table
// Tables to create in MariaDB: [ 'users_table', 'products_table' ]
```
