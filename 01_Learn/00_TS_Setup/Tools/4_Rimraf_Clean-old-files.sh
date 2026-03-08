# Rimraf (The "Clean" Tool)
# Since tsc creates a dist folder, 
# sometimes old files get stuck there. 
# rimraf is a cross-platform rm -rf.


# 💡 The "Clean" Pro-Tip
# TypeScript is great at creating files in your outDir, but it’s bad at deleting them. If you delete a .ts file in your src, the old .js version will still be sitting in your dist folder.
# Always run a "clean" command before you build for production:
```Bash
rimraf dist && tsc
```

# Install: 
npm install -D rimraf

# Usage in package.json: 
JSON
{
    "prebuild": "rimraf dist"
}
JSON
"scripts": {
  "clean": "rimraf dist",
}
