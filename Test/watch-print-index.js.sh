# ============================================================
# With entr
# sudo pacman -S entr 
# echo index.js | entr -c bat index.js

# ============================================================
# With bat
# sudo pacman -S bat
# while true; do clear; bat index.js; sleep 1; done

# ============================================================
# With nodemon
# npm install nodemon --save-dev --verbose
npx nodemon --watch dist/index.js --exec "clear; bat dist/index.js"
