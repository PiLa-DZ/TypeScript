Compiler-Diagnostics 
    is your "Debug Mode" 
    for the compiler itself. 
    You don't use these to write code; 
    you use them to find out why the compiler is slow 
    or why it's looking at certain files.

1. Performance & Profiling

    extendedDiagnostics: The most useful one. It prints a detailed table of where the compiler spent its time (e.g., "Check time," "Emit time," "I/O time").
    diagnostics:         A simpler version of the above. It shows basic memory usage and file counts.
    generateCpuProfile:  Outputs a file you can open in Chrome DevTools to see exactly which function calls slowed down your build.
    generateTrace:       Creates a massive JSON trace of everything the compiler did. This is usually only needed if you're reporting a bug to the TypeScript team.

2. File Discovery (The "Why is this here?" Group)

    explainFiles:     Very helpful! It tells you exactly why a file is part of your project (e.g., "Imported by index.ts" or "Included via types").
    listFiles:        Simply prints the names of every file the compiler is looking at.
    listEmittedFiles: Prints the names of the files that were actually written to the dist folder.

3. Deep Troubleshooting

    traceResolution: This is the "Nuclear Option" for module errors. It prints every single folder the compiler checked while trying to find a specific import. If your MariaDB driver isn't loading, turn this on.
    noCheck:         Disables all type-checking. It just turns TS into JS as fast as possible. This is mostly used for testing build pipelines where you've already run a separate type-check.

