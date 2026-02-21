Completeness (should checking the health of the library)

    Completeness_Options (skipLibCheck, skipDefaultLibCheck)

```JSON
{
  "compilerOptions": {
    /* -----------------------------------------------------------------
       COMPLETENESS
       Settings that determine how much of the total project 'web' 
       the compiler actually validates.
       ----------------------------------------------------------------- */
    /* Completeness Options (should checking the health of the library) */
    "skipLibCheck": true,       // Skip type checking of all declaration files (*.d.ts). Saves massive amounts of time and ignores errors in 3rd party libs.

    // NOTE: Use skipLibCheck instead. Skip type checking of default library declaration files.
    "skipDefaultLibCheck": true // Skip type checking of the default library files (ES6, DOM, etc). Mostly redundant if skipLibCheck is true.
  }
}
```


1. skipLibCheck (
    Skip type checking of all declaration files (*.d.ts). 
    Saves massive amounts of time and ignores errors in 3rd party libs.
)

2. skipDefaultLibCheck (
    Skip type checking of the default library files (ES6, DOM, etc). 
    Mostly redundant if skipLibCheck is true.
)
