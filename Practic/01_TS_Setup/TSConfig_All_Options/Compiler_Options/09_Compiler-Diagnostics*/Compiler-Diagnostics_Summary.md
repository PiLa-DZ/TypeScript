Compiler-Diagnostics (Debug Mode)

    Compiler-Diagnostics_Options (extendedDiagnostics, explainFiles, traceResolution, generateCpuProfile)

```JSON
{
  "compilerOptions": {
    /* -----------------------------------------------------------------
       COMPILER DIAGNOSTICS (Troubleshooting)
       Keep these 'false' or commented out unless you have a problem.
       ----------------------------------------------------------------- */
    "extendedDiagnostics": false,              // Shows how long compilation took and how much memory was used.
    "explainFiles": false,                     // Explains why a file was included in the compilation process. Great for finding out why your build is too large.
    "traceResolution": false,                  // Prints the search path for every import. Essential for fixing "Module not found" errors.
    "generateCpuProfile": "profile.cpuprofile" // Generates a file to analyze compiler performance in a profiler.
  }
}
```

1. extendedDiagnostics (
    It prints a detailed table of where the compiler spent its time
)

2. explainFiles (
    tells you exactly why a file is part of your project ("Imported by index.ts" or "Included via types").
)    

3. traceResolution (
    This is the "Nuclear Option" for module errors. 
    It prints every single folder the compiler checked while trying to find a specific import. 
    If your MariaDB driver isn't loading, turn this on.
)
    
4. generateCpuProfile (
    Outputs a file you can open in Chrome DevTools to see exactly which function calls slowed down your build.
)
