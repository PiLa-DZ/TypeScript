Type-Cheching (the "Strictness Dial" of TypeScript)

    Type-Cheching_Options(strict, noUnusedLocals, noImplicitReturns, noUncheckedIndexedAccess)

```JSON
{
  "compilerOptions": {
    /* Type-Cheching_Options */
    "strict": true,                  // The 'Master' safety switch. Enables a suite of core strict checks including strictNullChecks and noImplicitAny.
    "noUnusedLocals": true,          // Error when a local variable is declared but never used. Keeps code clean and helps find 'forgotten' variables.
    "noImplicitReturns": true,       // Ensures every code path in a function returns a value. Prevents functions from accidentally returning 'undefined'.
    "noUncheckedIndexedAccess": true // The 'Safety First' index check. When accessing an array or object by index, it forces you to check if the value is 'undefined'.
  }
}
```

1. strict                    // The 'Master' safety switch. Enables a suite of core strict checks including strictNullChecks and noImplicitAny.
2. noUnusedLocals            // Error when a local variable is declared but never used. Keeps code clean and helps find 'forgotten' variables.
3. noImplicitReturns         // Ensures every code path in a function returns a value. Prevents functions from accidentally returning 'undefined'.
4. noUncheckedIndexedAccess  // The 'Safety First' index check. When accessing an array or object by index, it forces you to check if the value is 'undefined'.


💡 For Old Projects
    The most important thing to know is that setting "strict": true" is like a master switch that turns on many of these at once.
    Maybe you have to turn OFF one of these

```JSON
{
  "compilerOptions": {
    /* THE MASTER SWITCH */
    "strict": true,
    /* -----------------------------------------------------------------
       THE "STRICT" SUB-FLAGS
       If strict is true, these are all true by default. 
       In an old project, you might set one of these to 'false' to 
       silence specific errors.
       ----------------------------------------------------------------- */
    "noImplicitAny": true,                // Forbids variables that don't have a type (defaults to 'any'). Turn off if: You have too many untyped variables to fix at once.
    "strictNullChecks": true,             // Prevents using a variable that might be null or undefined. Turn off if: Your old code doesn't check for nulls everywhere.
    "noImplicitThis": true,               // Ensures 'this' is used correctly in functions/callbacks. Turn off if: Your old code uses 'this' in complex, untyped ways.
    "strictFunctionTypes": true,          // Ensures function parameters are checked strictly. Turn off if: You have complex function assignments that fail.
    "strictBindCallApply": true,          // Ensures you use .bind, .call, and .apply with correct arguments. Turn off if: You use a lot of dynamic function binding.
    "strictPropertyInitialization": true, // Forces class properties to be initialized in the constructor. Turn off if: You use 'late initialization' or frameworks like TypeORM.
    "useUnknownInCatchVariables": true,   // Forces 'catch' variables to be 'unknown' instead of 'any'. Turn off if: You want to use 'error' in a catch block without checking it.
    "alwaysStrict": true                  // Always parses in JS 'Strict Mode' and emits "use strict". Turn off if: You have very old scripts that break in strict mode.
  }
}
```
