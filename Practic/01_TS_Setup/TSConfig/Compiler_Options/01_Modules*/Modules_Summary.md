The Modules is the "Traffic Controller" of your project. 

    Modules_Options( module, moduleResolution, rootDir, baseUrl, paths, resolveJsonModule)

module            // Sets the output JS code format. 'NodeNext' is the modern standard that supports both ES Modules (import/export) and CommonJS (require).
moduleResolution  // Tells TS how to look for files. 'NodeNext' ensures the compiler finds your files the same way Node.js does during execution.
rootDir           // The 'source' of your project. Tells the compiler to ignore the surrounding folder structure and only mirror what is inside './src'.
baseUrl           // The root directory for non-relative module names. Necessary for the 'paths' feature to work correctly.
paths             // Alias mapping. Allows you to use '@/' instead of ugly relative paths like '../../../../'. Makes imports cleaner and easier to move.
resolveJsonModule // Allows you to import '.json' files directly into your code. Essential for reading config files or 'package.json'.

```JSON
{
  "compilerOptions": {
    /* Modules Options */
    "module": "NodeNext",           // Sets the output JS code format. 'NodeNext' is the modern standard that supports both ES Modules (import/export) and CommonJS (require).
    "moduleResolution": "NodeNext", // Tells TS how to look for files. 'NodeNext' ensures the compiler finds your files the same way Node.js does during execution.
    "rootDir": "./src",             // The 'source' of your project. Tells the compiler to ignore the surrounding folder structure and only mirror what is inside './src'.
    "baseUrl": ".",                 // The root directory for non-relative module names. Necessary for the 'paths' feature to work correctly.
    "paths": { "@/*": ["src/*"] },  // Alias mapping. Allows you to use '@/' instead of ugly relative paths like '../../../../'. Makes imports cleaner and easier to move.
    "resolveJsonModule": true       // Allows you to import '.json' files directly into your code. Essential for reading config files or 'package.json'.
  }
}
```
