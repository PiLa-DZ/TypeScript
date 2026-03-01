4. extends (The Inheritor)

This allows you to inherit settings from another config file. 
This is great for keeping your "base" rules in one place and having specific overrides for production or testing.

- Example 1 ============================================================
```JSON
{
  "extends": "./tsconfig.base.json"
}
```

- Example 2 ============================================================
1. Imagine you have another config file in another place look like this

configs/base.json:
```JSON
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

2. So to inherit this file
tsconfig.json:
```JSON
{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
```
