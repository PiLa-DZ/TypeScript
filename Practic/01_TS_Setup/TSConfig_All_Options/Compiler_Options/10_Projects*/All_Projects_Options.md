Projects:
    is specifically for "Monorepos" 
    or very large applications split into multiple smaller packages 
    (e.g., a core package, an api package, and a db-client package).

1. composite

    What it is: The "Master Toggle" for Project References.
    Why use it: It tells TypeScript that this folder is just one piece of a larger puzzle. It forces several constraints (like requiring declaration: true) so that other projects can use its types without re-compiling everything.

2. incremental

    What it is: A massive speed booster.
    How it works: TypeScript saves information about the project graph from the last compilation. Next time you build, it only recompiles the files that actually changed.
    Wiki Note: This is automatically enabled if composite is true.

3. tsBuildInfoFile

    What it is: Defines where to save the "memory" file used by incremental.
    Default: .tsbuildinfo in your output folder.
    Why change it: If you want to keep your dist folder strictly for production JS, you might move this file to a .cache folder.

4. The "Disable" (Optimization) Trio

    These are used to fine-tune performance in massive corporate monorepos:

    disableSourceOfProjectReferenceRedirect: Forces TypeScript to look at the compiled .d.ts files of a dependency instead of the original .ts source code.
    disableReferencedProjectLoad:            Stops the editor from automatically loading all projects in a solution. Useful if your editor (Neovim) is lagging because the project is too huge.
    disableSolutionSearching:                Prevents TypeScript from looking for a "solution" (tsconfig.json that references others) when you're just looking at one file.
