# ============================================================
# Compiler_Options
npx tsc --target ES5 --module commonjs

# ============================================================
# In TypeScript, 
# instead of typing these flags in the terminal every time, 
# you store them in the compilerOptions section of your tsconfig.json.
#
# You need to touch these options when the environment changes 
# (e.g., moving from a Browser project to an Express server) 
# or when you want to tighten security.

# ============================================================
# 1. The "Must-Know" Options for Backend
# Here are the options you actually need to care about for your Express/MariaDB setup:

# ------------------------------------------------------------
# Type Checking (The "Safety" Flags)
# strict: 
# The "Boss Mode." If this is true, 
# TypeScript turns on all safety checks. 
# You need this to prevent null pointer-style errors in your database logic.

# noImplicitAny: 
# If you forget to type a variable, 
# TS usually defaults it to any. 
# This flag stops that and forces you to be specific. 
# Use this to keep your MariaDB schemas accurate.

# ------------------------------------------------------------
# Modules (The "Linking" Flags)
# module: 
# Tells TS which Module System (CJS or ESM) to output. 
# For a new Node.js project, you'll likely use NodeNext.

# moduleResolution: 
# Tells the compiler how to find your files. 
# NodeNext is the modern standard that understands how node_modules works.

# esModuleInterop: 
# As we discussed, 
# this is the "bridge" that allows you to import old CommonJS libraries as if they were modern modules.

# ------------------------------------------------------------
# Emit (The "Output" Flags)
# target: 
# Defines the JavaScript version. 
# Since Node.js 20+ supports almost everything, 
# setting this to ES2022 is a safe bet.

# outDir: 
# Where the .js files are "born." Usually set to ./dist.

# sourceMap: 
# Creates .js.map files. 
# You need this if you want to debug your TypeScript code directly in Neovim or Chrome, 
# because it links the running JS back to your original TS lines.

# ============================================================
# 2. When do you actually change these?
# You don't change these daily. 
# You usually set them once at the start of a project. 
# However, you will need to edit them if:

# You add a new library: Some libraries require specific flags (like experimentalDecorators for certain Database ORMs).
# Debugging becomes hard: You'll turn on sourceMap: true.
# The project gets slow: You might turn on incremental: true to make tsc only re-compile the files you changed (just like a Makefile).
# Deployment: When moving from "Dev" to "Production," you might change the target or turn off comments to save space.
