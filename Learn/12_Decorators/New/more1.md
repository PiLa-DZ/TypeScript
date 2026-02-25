```ts
// ============================================================
// 1. The Execution Stages (The "Order of Operations")
// When you have multiple decorators on a single class or method, they don't all run at the same time. They follow a specific "Waterfall" logic.
// Evaluation (Top-to-Bottom): The computer looks at each decorator from the top one down to the bottom to see what they are.
// Execution (Bottom-to-Up): This is the "Inception" stage. The decorator closest to the method runs first, and its result is passed to the one above it.

@First
@Second
method() {}

// 1. Evaluate First
// 2. Evaluate Second
// 3. Execute Second
// 4. Execute First

// ============================================================
// 1. The "Versions" Stage (The History)
// When people say "Stage 2" or "Stage 3" decorators, they are talking about the Evolution of the JavaScript language.
// Stage 1 & 2 (Experimental): This is the "Old" way. TypeScript has used this for years. If you use libraries like TypeORM for your MariaDB, they use this version. You have to turn on a setting in your tsconfig.json to use them.
// Stage 3 & 4 (Official): This is the "New" way. It is now officially part of the JavaScript language. The syntax is almost the same, but the "Engine" underneath works slightly differently.
// Summary: These stages are just updates to the rules of JavaScript.

// ============================================================
// 3. The 3 Steps of a Decorator's Life
// Every decorator goes through these three logical steps:
// 1 - Selection: You "tag" a class, method, or property with the @ symbol.
// 2 - Transformation: The decorator function runs at the moment the code is loaded (not when it is called). 
//     It changes the "Descriptor" of the property—for example, making a MariaDB password field "hidden" or "read-only."
// 3 - Application: The modified version of the class is what actually gets stored in memory.
// ------------------------------------------------------------
// Steps of a Decorator's Life:
// 1. Selection-Step
// 1. Transformation-Step
// 1. Application-Step


// ============================================================
// 2. The "Execution" Steps (The Logic)
// When you actually write @Decorator in your code, it goes through Steps. This is what happens inside the computer.
// ------------------------------------------------------------
// Step A: Discovery (At Runtime)
// As soon as your script starts, the JavaScript engine looks at your class. It sees the @ symbol. It says, "Wait! Before I build this class, I need to talk to the Decorator function first."
// ------------------------------------------------------------
// Step B: Transformation (The "Surgery")
// The Decorator function takes the original class/method and "performs surgery" on it.
// It can add new features.
// It can change how a variable works.
// It can block access (like making a property Read-Only).
// ------------------------------------------------------------
// Step C: Replacement
// The Decorator returns the "Improved" version of the class. When you finally call new User(), you aren't using the original class you wrote; you are using the Decorated version.

// ============================================================
function MyDecorator(
  target: any,          // The Class (or its prototype)
  propertyKey: string,  // The name of the method (e.g., "saveUser")
  descriptor: PropertyDescriptor // The "Internal Settings" of the method
) {
  // Logic goes here
}
```

