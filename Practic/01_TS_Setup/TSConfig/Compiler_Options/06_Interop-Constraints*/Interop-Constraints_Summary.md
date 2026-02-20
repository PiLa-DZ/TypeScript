Interop-Constraints (handles modern modules, old-school modules, and operating systems)

    Interop-Constraints_Options(esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, verbatimModuleSyntax)

```JSON
{
  "compilerOptions": {
    "esModuleInterop": true,                  // Standard for Node.js: Allows 'import express from "express"' instead of requiring 'import * as express'
    "forceConsistentCasingInFileNames": true, // Essential for Linux deployment: Forces you to match the exact upper/lowercase of your filenames
    "isolatedModules": true,                  // Ensures each file is safe for fast external transpilers like 'tsx'
    "verbatimModuleSyntax": true              // Modern approach to module imports; keeps things predictable by not being 'too smart' about removing imports
  }
}
```

1. esModuleInterop (Fixes a major headache between CommonJS (old Node) and ES Modules (new Node))
2. forceConsistentCasingInFileNames (
    Windows and macOS are often case-insensitive (User.ts is the same as user.ts), 
    but Linux (your server!) is case-sensitive. 
    This flag forces you to be consistent so your code doesn't break when you deploy it to a Linux server.
)
3. isolatedModules (
    Ensures that every single file can be safely transpiled on its own without needing to look at other files.
    Why use it: Essential if you use fast modern tools like tsx, esbuild, or Vite, which compile files one by one.
)
4. verbatimModuleSyntax (
    A modern, stricter way to handle imports. 
    It ensures that TypeScript only removes imports that are explicitly marked as types (import type { ... }).
)
