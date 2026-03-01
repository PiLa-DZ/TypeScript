# Install
npm install tsx --save-dev --verbose

# 1. Normal Mode (Execution)
npx tsx src/index.ts
# 2. Watch Mode (Development)
npx tsx watch src/index.ts

# package.json Setup
npm pkg set scripts.start="tsx src/index.ts"     # Normal Mode
npm pkg set scripts.dev="tsx watch src/index.ts" # Watch  Mode
```JSON
{
  "scripts": {
    "start": "tsx src/index.ts",
    "dev": "tsx watch src/index.ts",
  }
}
```

# - tsx (TypeScript Execute), 
    # modern CLI tool, 
    # used to run TypeScript files directly in Node.js, 
    # It is powered by esbuild, 
    # which is written in Go, 
    # making it incredibly fast.
