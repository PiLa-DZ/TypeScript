```Bash
npx tsc -w
npx tsc -watch
npx tsx watch src/index.ts
```

```JSON
"scripts": {
  "dev": "tsx watch src/index.ts",
  "check": "tsc --watch --noEmit"
}
```
