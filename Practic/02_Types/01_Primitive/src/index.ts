// Boolean
let isTrue: boolean = true;
console.log(isTrue); // true

let isFalse: boolean = false;
console.log(isFalse); // false

// Number
let intValue: number = 42;
console.log(intValue); // 42

let floatValue: number = 3.14;
console.log(floatValue); // 3.14

// String
let name: string = "John Doe";
console.log(name); // John Doe

// The inferred return type is void
function noop() {
  console.log("void");
  return;
}
noop(); // void // NOTE: return nothing

const msg = (): void => console.log("msg");
msg(); // mes

// Undefined
let userEmail: string | undefined = undefined;
console.log(userEmail); // undefined

userEmail = "user@example.com";
console.log(userEmail); // user@example.com

// Null
let nullVal: string | null = null;
console.log(nullVal); // null

nullVal = "Text";
console.log(nullVal); // Text
