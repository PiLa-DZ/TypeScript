1. The "Strict" Umbrella

    strict:       
        The master toggle. Setting this to true automatically enables 
        noImplicitAny, 
        strictNullChecks, 
        strictFunctionTypes, 
        strictBindCallApply, 
        strictPropertyInitialization, 
        noImplicitThis,
        alwaysStrict.
    alwaysStrict: Ensures your files are parsed in JavaScript "Strict Mode" and adds "use strict" to every output file.

2. The "No Implicit" Group (Force Explicit Types)

    noImplicitAny:      The most famous rule. It forbids variables that have no type and default to any. You must define what it is.
    noImplicitThis:     Complains if the type of this isn't clear (common in callback functions).
    noImplicitReturns:  Ensures every possible path in a function returns a value. No "falling off the end" of a function.
    noImplicitOverride: (C++ style) Requires you to use the override keyword when a sub-class method changes a parent method.

3. Data Integrity & Safety

    strictNullChecks:             When true, null and undefined are distinct types. You can't use a variable unless you prove it isn't null. This prevents 90% of common runtime crashes.
    useUnknownInCatchVariables:   Changes the error in a catch(e) block from any to unknown, forcing you to check what the error is before using it.
    strictPropertyInitialization: Forces you to initialize class properties in the constructor.
    exactOptionalPropertyTypes:   Prevents you from setting an optional property to undefined explicitly if it's meant to be missing.

4. Code Quality & Cleanup

    noUnusedLocals:       Errors if you declare a variable but never use it.
    noUnusedParameters:   Errors if a function receives an argument but doesn't use it.
    allowUnreachableCode: If false, it errors on code after a return statement.
    allowUnusedLabels:    If false, it errors on unused labels (rarely used in modern JS).

5. Logic & Switch Safety

    noFallthroughCasesInSwitch:         Ensures you don't forget a break or return in a switch statement, preventing the code from "falling through" to the next case.
    noPropertyAccessFromIndexSignature: Forces you to use obj['key'] instead of obj.key for types that don't explicitly define that property.
    noUncheckedIndexedAccess:           If you access an array by index, it forces you to check if the result is undefined (because the index might not exist).

6. Advanced Function Checking

    strictFunctionTypes:         Ensures function parameters are checked more correctly (contravariantly).
    strictBindCallApply:         Ensures that when you use .bind, .call, or .apply, the arguments match the original function.
    strictBuiltinIteratorReturn: Forces stricter checking on values returned from iterators (like yield).
