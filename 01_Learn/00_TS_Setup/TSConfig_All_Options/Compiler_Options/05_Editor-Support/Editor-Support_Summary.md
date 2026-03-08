Editor-Support (For massive project or add extra features)

    Editor-Support_Options(disableSizeLimit, plugins)

```JSON
{
  "compilerOptions": {
    /* Removes the 20MB limit on the total amount of source code the 
       language server will process. Only turn on for massive projects. */
    "disableSizeLimit": false,

    /* A list of plugins to enhance the editor experience. 
       Note: These do NOT affect the final JavaScript build; 
       they only change how your editor behaves. */
    "plugins": [
      // Example: { "name": "typescript-tslint-plugin" }
    ]
  }
}
```


1. disableSizeLimit (Just for massive project)
2. plugins          (Add more features like Language Service)
