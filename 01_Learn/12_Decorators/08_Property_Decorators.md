- -------------------------------------------------------------------------------------------------------------------
### Property-Decorators
- -------------------------------------------------------------------------------------------------------------------
- Property decorators are unique and a little bit "tricky"
- In the Experimental version you are using, 
- Property Decorators are "quiet"
- they do not have a descriptor. 
- This means they cannot easily "wrap" the data like a Method or Accessor decorator can.

- -------------------------------------------------------------------------------------------------------------------
1. The Signature (The 2 Ingredients)
- Because there is no descriptor, 
- you only get two arguments:
```ts
function MyPropertyDecorator(
  target: any,          // The Class Prototype
  propertyKey: string   // The name of the property ("email")
) {
  // Logic goes here
}
```

- -------------------------------------------------------------------------------------------------------------------
2. The Big Question: "If I can't wrap it, what do I do?"
- Since you don't have a descriptor to change the value, 
- Property Decorators are mostly used for Metadata Storage.

- In your MariaDB project, 
- this is how @Column() works. 
- The decorator doesn't change the value of your username; 
- it simply "records" a note saying: "Hey, the property 'username' 
- should be mapped to a VARCHAR(255) in MariaDB."

- -------------------------------------------------------------------------------------------------------------------
3. Real Example: A "Required" Validator
- Let’s say you want to mark certain properties as "Required" 
- so that before you save to MariaDB, 
- you can check if they are empty.

```ts
// A simple global storage for our metadata
const requiredMetadata: Record<string, string[]> = {};

function Required(target: any, key: string) {
  const className = target.constructor.name;

  if (!requiredMetadata[className]) {
    requiredMetadata[className] = [];
  }

  // We just "mark" this property name in our list
  requiredMetadata[className].push(key);
}

class User {
  @Required
  username: string;

  @Required
  email: string;

  constructor(u: string, e: string) {
    this.username = u;
    this.email = e;
  }
}

class Product {
  @Required
  name: string;

  @Required
  price: number;

  constructor(u: string, e: number) {
    this.name = u;
    this.price = e;
  }
}

// console.log("Registered Required Fields:", requiredMetadata);
console.log("Registered Required Fields:");
console.log(requiredMetadata);
// Output:
// Registered Required Fields:
// { User: [ 'username', 'email' ], Product: [ 'name', 'price' ] }
```
- -------------------------------------------------------------------------------------------------------------------
4. How to actually "Change" a property value
- If you absolutely must change the value of a property using a decorator 
- (without using a Getter/Setter), 
- you have to do some "Engine Surgery" using `Object.defineProperty`.

- This is what libraries do under the hood to make the magic happen:

```ts
function ToUpperCase(target: any, key: string) {
  let value: string;

  const getter = function() {
    return value;
  };

  const setter = function(newVal: string) {
    value = newVal.toUpperCase();
  };

  // We manually turn the simple property into an Accessor!
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Product {
  @ToUpperCase
  title: string = "";
}

const p = new Product();
p.title = "toyota";
console.log(p.title); // "TOYOTA"
```
- -------------------------------------------------------------------------------------------------------------------
5. Why the "Metadata" way is better for MariaDB
- When you use a library like Prisma or TypeORM, 
- you don't want the property itself to be doing all the heavy lifting.

- You want the Property Decorator to record the types, 
- and then you want a Class Decorator or a Database Manager to read that list and generate the SQL.

- 1. Property Decorator: "I am a VARCHAR."
- 2. Property Decorator: "I am an INT."
- 3. Database Manager: "Okay, I see two columns. I will now run CREATE TABLE..."
- -------------------------------------------------------------------------------------------------------------------
