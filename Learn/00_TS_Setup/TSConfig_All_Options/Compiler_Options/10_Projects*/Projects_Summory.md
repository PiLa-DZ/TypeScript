Projects (Monorepos)

    Project_Options (composite, incremental, tsBuildInfoFile)

```JSON
{
  "compilerOptions": {
    /* Project Options */
    "composite": false,                 // Enables Project References, allowing you to break a large Express app into smaller, faster sub-projects.
    "incremental": true,                // Saves a '.tsbuildinfo' file to speed up future compilations by only building what changed. HIGHLY RECOMMENDED.
    "tsBuildInfoFile": "./.tsbuildinfo" // Specifies where the incremental build cache file is stored.
  }
}
```

1. composite (
    The "Master Toggle" for Project References.
    It tells TypeScript that this folder is just one piece of a larger puzzle. 
    It forces several constraints (like requiring declaration: true) 
    so that other projects can use its types without re-compiling everything.
)

2. incremental (
    A massive speed booster.
    TypeScript saves information about the project graph from the last compilation. 
    Next time you build, 
    it only recompiles the files that actually changed.
    Wiki Note: This is automatically enabled if composite is true.
)

3. tsBuildInfoFile (
    Defines where to save the "memory" file used by incremental.
    Default: .tsbuildinfo in your output folder.
    Why change it: 
        If you want to keep your dist folder strictly for production JS, 
        you might move this file to a .cache folder.
)

💡 Why this matters for your MariaDB project
    Even if you aren't building a monorepo yet, you should always turn on incremental.
    Without it: Every time you restart your Express server, TS recompiles everything.
    With it: TS sees you only changed userController.ts and updates just that file in milliseconds. It makes your development loop much faster.
