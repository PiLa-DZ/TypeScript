# NOTE: The Rule of Thumb: Every TypeScript project should start with: Install TypeScript and Definitions
npm install typescript --save-dev --verbose  # Install TypeScript
npm install @types/node --save-dev --verbose # Install Definitions

npx tsc                  # Normal Mode
npx tsc --watch          # Watch Mode
npx tsc --watch --noEmit # Watch Mode (No Files Create)

# == ============================================================
# == Compiler Options: you can override tsconfig.json in the terminal:
# == ============================================================

# ---------------------------------------------------------------
# 1. The "Where is it?" Options:
#    These control your folder structure.
npx tsc --rootDir ./src         # Specify the source root
npx tsc --outDir ./dist         # Specify the output folder
npx tsc src/index.ts            # Compile a specific file only

# ---------------------------------------------------------------
# 2. The "What version?" Options
#    These control the JavaScript translation.
npx tsc --target es2022         # Set the JavaScript version (Target)
npx tsc --module NodeNext       # Set the Module system

# ---------------------------------------------------------------
# 3. The "Strictness" Options
#    These are your safety guards.
npx tsc --strict ture           # Turn on ALL strict rules
npx tsc --noImplicitAny ture    # Turn on JUST the 'any' check
npx tsc --strictNullChecks ture # Check for Null/Undefined errors

# ---------------------------------------------------------------
# 4. The "Workflow" Options
#    These control how the compiler behaves.
npx tsc --watch                 # Watch Mode (Wait for saves)
npx tsc --noEmit                # Dry Run (Check types, but don't create .js files)
npx tsc --sourceMap ture        # Include Source Maps (For debugging in Neovim)

# == ============================================================

# package.json Setup
npm pkg set scripts.build="tsc"                             # Normal Mode
npm pkg set scripts.build:watch="tsc --watch"               # Watch Mode
npm pkg set scripts.type-check="tsc --noEmit"               # Type Check
npm pkg set scripts.type-check:watch="tsc --noEmit --watch" # Type Check and Watch Mode
```JSON
"scripts": {
    "build": "tsc",
    "build:watch": "tsc --watch",
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch",
}
```

# TSC is the official command-line tool 
    # provided by Microsoft. 
    # Its primary job is Transpilation: 
        # it reads your TypeScript code, 
        # checks it for errors, 
        # and emits clean JavaScript code 
        # that Node.js or a Browser can actually execute.
