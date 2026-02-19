// ============================================================
// 1. Prettier: The "Industry Standard"

// Prettier needs a configuration file in your project root to know your "opinions."
// Create a file named .prettierrc in your project folder:
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}

// ============================================================
// .prettierignore: Tells Prettier to ignore files like node_modules or your compiled dist folder.
// .prettierignore
# Folders
node_modules/
dist/
build/
coverage/

# Database / Secrets
.env
*.sql.gz

# Lock files (Formatting these can cause issues)
package-lock.json
pnpm-lock.yaml

