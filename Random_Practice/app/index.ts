let myBoolean: boolean = true; // Boolean
let myNumber: number = 42; // Number
let myString: string = "John Doe"; // String
let myUndefined: undefined; // Undefined
let myNull: null; // Null
const msg = (): void => console.log("msg"); // Void
interface Person {
  name: string;
} // Interface
class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
} // Class
enum UserRole {
  Guest /* 0 */, // UserRole.Guest --> 0
  User /* 1 */, // UserRole.User --> 1
} // 1. Numeric Enums
enum Status {
  Active = "ACTIVE", // Status.Active --> ACTIVE
  Inactive = "INACTIVE", // Status.Inactive --> INACTIVE
} // 2. String Enums
let tags: string[] = ["node", "express"]; // Array
let scores: Array<number> = [10, 20, 30]; // Array
type StringNumberPair = [string, number]; // Tuple
const myObject = (p: { x: number }) => p.x; // Object
let myAny: any = { x: 0 }; // Any
let myUknown: unknown = { x: 0 }; // Unknown
const myNever = (): never => {
  throw new Error("error");
}; // Never
let myUknown2: unknown = "this is a string";
let myAs = (myUknown2 as string).length; // AS
let myNumber2: number = 22;
let myAsAny: string[] = myNumber2 as any; // AS Any
let myAsConst = "25.6.0" as const; // AS Const
let myNutNull: string | null = "Archie";
console.log(myNutNull!.toUpperCase()); // Not-Null
type Config = { port: number | string };
const mySatisfies = { port: 3306 } satisfies Config; // Setisfies
let myInference = 25; // Inference
let myCompatibility1 = { a: "a", b: "b" };
let myCompatibility2 = myCompatibility1; // Compatibility
let myUnion: string | number; // Union (|)
let myLiteralUnion: "a" | "b" | "c"; // Literal Unions (|)
type ist1 = { name: string };
type ist2 = { age: number };
type myIntersection = ist1 & ist2; // Intersection (&)
type istc1 = { id: string };
type istc2 = { id: number };
type myIntersectionConflict = istc1 & istc2; // Intersection Conflict (&)
type ta = { name: string; age: number };
let myTypeAliases: ta = { name: "Jol", age: 22 }; // Type Aliases
type ko = { name: string; age: number };
let myKeyofOperator: keyof ko; // keyof --> "name" | "age";
