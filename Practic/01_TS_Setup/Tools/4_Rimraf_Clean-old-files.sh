# Rimraf (The "Clean" Tool)
# Since tsc creates a dist folder, 
# sometimes old files get stuck there. 
# rimraf is a cross-platform rm -rf.


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
