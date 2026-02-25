- -------------------------------------------------------------------------------------------------------------------
### Accessor-Decorator (get set)
- -------------------------------------------------------------------------------------------------------------------
// Stored in DB object: "GEMINI_DEV" 
- -------------------------------------------------------------------------------------------------------------------
- In a MariaDB project, 
- this is perfect for Data Sanitization 
- (cleaning up data before it's saved) 
- or Formatting (changing data when it's read).


// Stored in DB object: "GEMINI_DEV" 
- -------------------------------------------------------------------------------------------------------------------
1. The Real-World Scenario: The "Secret" Password
- Let's imagine you have a User class. 
- When you set a password, 
- you want to automatically hash it (mask it). 
- When you get a username, 
- you want to make sure it's always trimmed of whitespace.

- -------------------------------------------------------------------------------------------------------------------
2. The Code Example
- Here is how you write a decorator that intercepts a set accessor 
- to "clean" the data before it gets stored in your class 
- (and eventually your database).

```ts
function TrimAndUpper(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalSetter = descriptor.set; // Note: we use .set instead of .value!

  descriptor.set = function (value: string) {
    // 1. We modify the incoming value
    const cleanedValue = value.trim().toUpperCase();
    
    console.log(`[Accessor-Log] Transforming ${value} -> ${cleanedValue}`);

    // 2. We call the original setter with the "Clean" data
    if (originalSetter) {
      originalSetter.apply(this, [cleanedValue]);
    }
  };
}

class MariaUser {
  private _username: string = "";

  @TrimAndUpper
  set username(name: string) {
    this._username = name;
  }

  get username() {
    return this._username;
  }
}

const user = new MariaUser();
user.username = "   gemini_dev   "; 

console.log(`Stored in DB object: "${user.username}"`); 
// Output:
// [Accessor-Log] Transforming    gemini_dev    -> GEMINI_DEV
// Stored in DB object: "GEMINI_DEV"
```
- -------------------------------------------------------------------------------------------------------------------
- -------------------------------------------------------------------------------------------------------------------
