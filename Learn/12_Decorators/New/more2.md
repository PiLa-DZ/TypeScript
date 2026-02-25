### 💡 Which "Stage" is most important for you?
- Since you are building a MariaDB project:
    1. The Versions: You will likely use the "Experimental" version because most database libraries still use that.
    2. The Execution: You need to know that decorators run ONCE when the app starts, not every time you save data

### Steps of a Decorator's Life:
1. Selection-Step
2. Transformation-Step
3. Application-Step


### (The "Order of Operations")
- Evaluation (Top-to-Bottom)
- Execution (Bottom-to-Up)
```ts
@First
@Second
method() {}
```
1. Evaluate First
2. Evaluate Second
3. Execute Second
4. Execute First


### The "Versions" Stage (The History)
- Stage 1 & 2 (Experimental): This is the "Old" way. TypeScript has used this for years. If you use libraries like TypeORM for your MariaDB, they use this version. You have to turn on a setting in your tsconfig.json to use them.
- Stage 3 & 4 (Official): This is the "New" way. It is now officially part of the JavaScript language. The syntax is almost the same, but the "Engine" underneath works slightly differently.
- Summary: These stages are just updates to the rules of JavaScript.
