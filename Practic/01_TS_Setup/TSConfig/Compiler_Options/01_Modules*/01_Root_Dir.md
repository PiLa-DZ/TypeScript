```TS
{
  "compilerOptions": {
    "rootDir": "./src", // this the starting point of my source code
  }
}
```
rootDir (this the starting point of my source code)

It doesn't actually tell TypeScript which files to compile (that’s the job of include), 
but it tells TypeScript how to mirror your folder structure when it generates the output.

1. What is the purpose of rootDir?
When tsc compiles your code, 
    it tries to replicate your source directory structure inside your output directory (usually dist).

rootDir tells the compiler: 
    "This folder is the starting point of my source code. Ignore everything outside of it when recreating the folder tree."

2. The "Structure Mirror" Example
Imagine your project looks like this:
/my-project
├── src/
│   ├── index.ts
│   └── auth/
│       └── login.ts
├── tsconfig.json

Scenario A: With rootDir: "./src" Your dist folder will look like this:
/dist
├── index.js
└── auth/
    └── login.js

Scenario B: Without rootDir (or if it's set to the project root)
If you accidentally import a file from outside of src (like a helper script in your project root), TypeScript will panic and try to include it. Your dist folder might end up looking like this:
/dist
├── src/
│   ├── index.js
│   └── auth/
│       └── login.js
└── some-random-script.js

3. The Relationship with outDir
You can't really talk about rootDir without its partner, outDir.
rootDir: Where the code comes from.
outDir: Where the code goes to.
``` JSON
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```
4. Common Errors: "File is not under 'rootDir'"
If you set "rootDir": "./src", but you have a file at ./shared-utils.ts and you try to import it into your server, tsc will throw an error:
"File 'shared-utils.ts' is not under 'rootDir' 'src'."
The Solution: Either move that file into src, or change your rootDir to ./ (the project root). However, for an Express/MariaDB backend, moving everything into src is the professional standard.

💡 Pro-Tip for your MariaDB Setup
Keep your database models, controllers, and routes all inside src. 
By setting rootDir: "./src", 
you ensure that when you deploy your app to a server, 
the path to your MariaDB config stays consistent between development and production.

