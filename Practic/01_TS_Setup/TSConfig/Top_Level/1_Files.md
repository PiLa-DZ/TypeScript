1. files (The White List)
This is the most strict way to include files. 
You list every single file you want to compile by name.

Best for: Small projects with only 2 or 3 files.

Downside: You have to manually add every new .ts file you create. 
It’s annoying for a growing Express project.

```JSON
{
    "files": ["src/index.ts", "src/database.ts"]
}
```
