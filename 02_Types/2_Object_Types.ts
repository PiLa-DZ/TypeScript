// ============================================================
// Interface
// TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.
interface Person {
  name: string;
  age: number;
}
function greet(person: Person) {
  return 'Hello ' + person.name;
}

// ============================================================
// Class
// In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes are a fundamental concept in object-oriented programming. Here is an example of a simple class in TypeScript:
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

// ============================================================
// Enum
// 1. Numeric Enums
// By default, Enums are number-based. They start at 0 and auto-increment.
enum UserRole {
  Guest,    // 0
  User,     // 1
  Admin,    // 2
  SuperMod  // 3
}
let myRole: UserRole = UserRole.Admin;
console.log(myRole); // Outputs: 2

// 2. String Enums
// In modern TypeScript, String Enums are usually preferred because they are easier to debug. When you log them, you see the actual word instead of a number.
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}
function checkStatus(current: Status) {
  if (current === Status.Active) {
    console.log("The system is running!");
  }
}
checkStatus(Status.Active); // Passing the enum value

// ============================================================
// Array
let tags:   string[]      = ["node", "express"]; 
let scores: Array<number> = [10, 20, 30];

// ============================================================
// Tuple
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
type StringNumberPair = [string, number];
const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];

// Error: Index out of bounds
const third = pair[2];

// ============================================================
// Object
// To define an object type, we simply list its properties and their types.
// For example, here’s a function that takes a point-like object:

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
