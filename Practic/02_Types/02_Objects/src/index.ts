// ============================================================
// Interface
// TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects.
interface Person {
  name: string;
  age: number;
}

const newPerson: Person = {
  name: "Jon",
  age: 22,
};

console.log(newPerson); // { name: 'Jon', age: 22 }
console.log(newPerson.name, newPerson.age); // Jon 22

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

const car: Car = new Car("Honda", "GTR", 2015);

car.drive(); // Driving my 2015 Honda GTR
console.log(car.make); // Honda
console.log(car.model); // GTR
console.log(car.year); // 2015

// ============================================================
// Enum
// 1. Numeric Enums
// By default, Enums are number-based. They start at 0 and auto-increment.
enum UserRole {
  Guest, // 0
  User, // 1
  Admin, // 2
  SuperMod, // 3
}

console.log(UserRole.Admin); // 2
// console.log(UserRole.admin); // Eroor
// console.log(UserRole.SuperAdmin); // Eroor

// 2. String Enums
// In modern TypeScript, String Enums are usually preferred because they are easier to debug. When you log them, you see the actual word instead of a number.
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}
let myStatus: Status;
myStatus = Status.Active;
console.log(myStatus); // ACTIVE

// ============================================================
// Array
let tags: string[] = ["node", "express"];
let scores: Array<number> = [10, 20, 30];

console.log(tags[0]); // node
console.log(tags[100]); // undefined
console.log(scores[0]); // 10
console.log(scores.length); // 3

// ============================================================
// Tuple
// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.
type StringNumberPair = [string, number];
const pair: StringNumberPair = ["hello", 42];
console.log(pair[0]); // hello
console.log(pair[1]); // 42
// console.log(pair[100]); // Error

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
// Output:
// The coordinate's x value is 3
// The coordinate's y value is 7
