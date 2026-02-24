// queck review of classes in javascript

// ============================================================
// 1. The Class is a Function
// When you write class User {}, JavaScript literally creates a Function object.
class User {
  constructor(name) {
    this.name = name;
  }
}
console.log(typeof User); // "function"

// ============================================================
// 2. The Parts of a JS Class
// constructor: -----------------------------------------------
// ----------- This is the initialization function.
// ----------- It runs when you call new.
// Methods: ---------------------------------------------------
// ------- These are functions attached to the class. In JS,
// ------- these are automatically added to the Prototype,
// ------- so they are shared by all instances to save memory.
// this: ------------------------------------------------------
// ---- Refers to the specific object instance being created.

// ============================================================
// 3. Inheritance (extends and super)
// JavaScript uses extends for inheritance.
// If the child has a constructor,
// it must call super() before touching this.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls Animal constructor. Mandatory!
    this.breed = breed;
  }
}

// ============================================================
// 4. Static vs. Instance

// Instance Members: ------------------------------------------
// Access:
// - Use the new keyword to create it,
// - then access properties via the variable name.
// Context:
// - this refers to the specific individual object.
class Employee {
  constructor(name) {
    this.name = name; // Instance Property
  }
}
const ali = new Employee("Ali");
const sara = new Employee("Sara");
console.log(ali.name); // "Ali"
console.log(sara.name); // "Sara"

// Static Members: --------------------------------------------
// Access:
// - Access directly via the Class name.
// - You cannot access it through an instance.
// Context:
// - this refers to the Class, not the object.
class Employee2 {
  static companyName = "TechCorp"; // Static Property
  static announce() {
    console.log("Welcome to " + this.companyName);
  }
}
console.log(Employee2.companyName); // "TechCorp"
Employee2.announce(); // "Welcome to TechCorp"
// ❌ This will fail:
// ali.announce();

// ============================================================
// 5. Private Fields (The New Standard)
//
// Old JS had no private variables.
// Modern JS uses the # symbol.
// This is real privacy
// (unlike TypeScript's private keyword, which is a "ghost" and disappears).

class BankAccount {
  #balance = 0; // Truly private. Cannot be accessed outside the class.
  deposit(amount) {
    this.#balance += amount;
  }
}

// ============================================================
// Technically, it's a "family of three":
// The Constructor (The Factory): The function that builds the object.
// The Prototype --(The Parent Object): The object that holds the shared DNA (methods).
// The Instance ---(The Child): The specific object you use in your code.

class UserBluePrint {
  constructor(firstName, lastName) {
    // These live on the INSTANCE
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // This lives on the PROTOTYPE (Shared)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new UserBluePrint("Ali", "Bouzegza"); //- UserBluePrint { firstName: 'Ali', lastName: 'Bouzegza' }
const user2 = new UserBluePrint("Sara", "Relizane"); // UserBluePrint { firstName: 'Sara', lastName: 'Relizane' }
console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(UserBluePrint.prototype.getFullName.call(user1));

console.log(user1.hasOwnProperty("firstName")); // true
console.log(user1.hasOwnProperty("getFullName")); // false
console.log(UserBluePrint.prototype.hasOwnProperty("getFullName")); // true
