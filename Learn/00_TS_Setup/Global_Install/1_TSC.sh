sudo npm install typescript --global --verbose    # Install TypeScript

# NOTE: You can't install @types/node in Global
npm install @types/node --save-dev --verbose # Install Definitions

tsc                  # Normal Mode
tsc --watch          # Watch Mode
tsc --watch --noEmit # Watch Mode (No Files Create)

# == ============================================================
# == Compiler Options: you can override tsconfig.json in the terminal:
# == ============================================================

# ---------------------------------------------------------------
# 1. The "Where is it?" Options:
#    These control your folder structure.
tsc --rootDir ./src         # Specify the source root
tsc --outDir ./dist         # Specify the output folder
tsc src/index.ts            # Compile a specific file only

# ---------------------------------------------------------------
# 2. The "What version?" Options
#    These control the JavaScript translation.
tsc --target es2022         # Set the JavaScript version (Target)
tsc --module NodeNext       # Set the Module system

# ---------------------------------------------------------------
# 3. The "Strictness" Options
#    These are your safety guards.
tsc --strict ture           # Turn on ALL strict rules
tsc --noImplicitAny ture    # Turn on JUST the 'any' check
tsc --strictNullChecks ture # Check for Null/Undefined errors

# ---------------------------------------------------------------
# 4. The "Workflow" Options
#    These control how the compiler behaves.
tsc --watch                 # Watch Mode (Wait for saves)
tsc --noEmit                # Dry Run (Check types, but don't create .js files)
tsc --sourceMap ture        # Include Source Maps (For debugging in Neovim)

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
