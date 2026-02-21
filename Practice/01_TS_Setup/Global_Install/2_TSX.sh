### The "Global" Way (Not Recommended)
sudo npm install   tsx --global --verbose
sudo npm uninstall tsx --global --verbose

# 1. Normal Mode (Execution)
tsx random.ts
# 2. Watch Mode (Development)
tsx watch random.ts

# package.json Setup
npm pkg set scripts.dev="tsx src/index.ts"       # Normal Mode
npm pkg set scripts.dev="tsx watch src/index.ts" # Watch  Mode
```JSON
{
  "scripts": {
    "start": "tsx src/index.ts",
    "dev": "tsx watch src/index.ts",
  }
}
```
