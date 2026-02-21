# Prettier (The "Auto-Formatter")
# In TS, we use Prettier.

# Why use it? 
# You never have to worry about tabs vs. 
# spaces or semicolons again. 
# You just hit :w in Neovim, 
# and the code snaps into perfect alignment.
Install: npm install -D prettier

"scripts": {
  "format": "prettier --write src/**/*.ts"
}
