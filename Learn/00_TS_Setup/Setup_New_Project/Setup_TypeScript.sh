# ============================================================
# 1. SETUP PURPOSE
# This Project For
#      JavaScript
#      TypeScript
#      NodeJS
#      MariaDB
#      Express
#      Prisma
# ============================================================

# ============================================================
# 2. PROJECT STRUCTURE
# ├── src/
# │   ├── index.ts        # Entry point
# │   ├── routes/         # Express routes
# │   └── lib/            # Prisma client & DB logic
# ├── prisma/
# │   └── schema.prisma   # Your MariaDB Schema
# ├── .env                # Database credentials
# ├── .gitignore
# ├── package.json
# └── tsconfig.json
# ============================================================

# ============================================================
# 3. PACKAGE.JSON CONFIGURATION
# ============================================================
npm init -y
npm pkg set type="module"
npm pkg set private=true
npm pkg set main="dist/index.js"
npm pkg set scripts.build="tsc"
npm pkg set scripts.dev="tsx watch src/index.ts"
npm pkg set scripts.start="node dist/index.js"
npm pkg set scripts.db:push="prisma db push"
npm pkg set scripts.db:studio="prisma studio"

# ============================================================
# 4. CORE DEPENDENCIES (Production)
# ============================================================
npm install express          --verbose
npm install dotenv           --verbose
npm install mariadb          --verbose
npm install @prisma/client@6 --verbose

# ============================================================
# 5. DEVELOPMENT DEPENDENCIES
# ============================================================
npm install typescript     --save-dev --verbose # TypeScript Compiler
npm install @types/node    --save-dev --verbose # TypeScript Definitions For NodeJS
npm install @types/express --save-dev --verbose # TypeScript Definitions For Express
npm install @types/mariadb --save-dev --verbose # TypeScript Definitions For MariaDB
npm install tsx            --save-dev --verbose # TypeScript Execute
npm install prisma@6       --save-dev --verbose # Prisma CLI Tool

# ============================================================
# 6. SRC DIRECTORY SETUP
# ============================================================
mkdir -p src
mkdir -p src/routes
mkdir -p src/lib
touch src/index.ts

# ============================================================
# 7. PRISMA SETUP
# ============================================================
npx prisma init --datasource-provider mysql
cat <<EOF > prisma/schema.prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
EOF

# ============================================================
# 8. ENVIRONMENT (.env) SETUP
# ============================================================
echo 'DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE_NAME"' > .env

# ============================================================
# 9. TYPESCRIPT CONFIG (tsconfig.json)
# ============================================================
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] },
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "incremental": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF

# ============================================================
# 10. GIT INITIALIZATION
# ============================================================
cat <<EOF > .gitignore
node_modules/
dist/
.env
.tsbuildinfo
EOF

git init
git add .
COMMIT_MSG="
  Initial commit: Stack Setup
- Backend: Express & NodeJS
- Language: TypeScript (Strict)
- Database: MariaDB via Prisma"
git commit -m "$COMMIT_MSG"
