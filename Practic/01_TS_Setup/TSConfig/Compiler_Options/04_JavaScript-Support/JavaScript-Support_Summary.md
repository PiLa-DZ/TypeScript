JavaScript-Support is specifically for projects that are in a "Mixed State"

    JavaScript-Support_Options(allowJs, checkJs, maxNodeModuleJsDepth)

```JSON
{
  "compilerOptions": {
    /* Allows JavaScript files (.js) to be part of your project. 
       Without this, TS ignores anything that isn't a .ts file. */
    "allowJs": true,

    /* Enables type-checking in JavaScript files. 
       TS will use JSDoc comments to find bugs in your .js files. */
    "checkJs": true,

    /* Tells TS how many folders deep into 'node_modules' it should 
       search for JS files to infer types. Keep this at 0 for speed 
       unless a specific old library requires more. */
    "maxNodeModuleJsDepth": 0
  }
}
```

💡 You won't use these for your new Express/MariaDB project, but they are lifesavers when dealing with old codebases.
1. allowJs (To start a migration: Set allowJs: true.)
2. checkJs (To find bugs in old JS without rewriting it: Set checkJs: true.)
2. maxNodeModuleJsDepth (If compilation is too slow: Ensure maxNodeModuleJsDepth is 0.)
