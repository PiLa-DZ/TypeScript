3. exclude (The Black List)

This tells the compiler: "Even if a file matches my include rule, 
ignore it if it's in these folders."

Mandatory: You almost always want to exclude node_modules.

Note: If an included file imports a file that is excluded, 
TypeScript will still load the excluded file because it's necessary for the code to run.

```JSON
{
  "exclude": ["node_modules", "dist", "**/*.spec.ts"] 
}
```
