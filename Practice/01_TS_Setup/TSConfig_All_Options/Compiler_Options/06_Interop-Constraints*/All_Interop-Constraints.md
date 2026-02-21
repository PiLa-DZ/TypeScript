Interop_Constraints 
    define how TypeScript handles 
    the differences between modern modules, 
    old-school modules, 
    and different operating systems

1. The "Compatibility" Trio

esModuleInterop:
    What it does: Fixes a major headache between CommonJS (old Node) and ES Modules (new Node).
    Why you need it: Without this, you have to write import * as express from 'express'. With this set to true, you can write the much cleaner import express from 'express'.

allowSyntheticDefaultImports:
    What it does: Allows you to use "default imports" for libraries that don't technically have a default export.
    Note: esModuleInterop turns this on automatically, so you usually don't need to list both.

verbatimModuleSyntax:
    What it does: A modern, stricter way to handle imports. It ensures that TypeScript only removes imports that are explicitly marked as types (import type { ... }).

2. The "Safety" Duo

forceConsistentCasingInFileNames:
    Why you need it: Windows and macOS are often case-insensitive (User.ts is the same as user.ts), but Linux (your server!) is case-sensitive. This flag forces you to be consistent so your code doesn't break when you deploy it to a Linux server.

isolatedModules:
    What it does: Ensures that every single file can be safely transpiled on its own without needing to look at other files.
    Why use it: Essential if you use fast modern tools like tsx, esbuild, or Vite, which compile files one by one.

3. Advanced & New Flags

isolatedDeclarations: (New in TS 5.5) Forces you to be explicit about return types on exported functions so TypeScript can generate declaration files (.d.ts) much faster.

erasableSyntaxOnly: Ensures you only use TypeScript features that can be easily "erased" (like types) and avoids features that generate extra JS (like enums or namespaces).

preserveSymlinks: Mirrors the Node.js flag of the same name. It tells TS to resolve modules relative to the symbolic link path rather than the real path.
