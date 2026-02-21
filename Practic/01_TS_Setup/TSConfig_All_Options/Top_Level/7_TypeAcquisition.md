TypeAcquisition (specifically designed for JavaScript developers)

    typeAcquisition_Options (enable, exclude, include, disableFilenameBasedTypeAcquisition)

TypeAcquisition
    This is the "Background Assistant" section of TypeScript. 
    Type Acquisition is a feature specifically designed for JavaScript developers 
    who want the benefits of TypeScript (like autocomplete) 
    without actually converting their files to .ts.

In your Express/MariaDB project, 
    this usually runs quietly in the background of your editor (Neovim/VS Code) 
    to fetch type definitions (the .d.ts files) 
    for your library imports.

1. enable

    What it is: Turns the automatic type acquisition system on or off.
    Why use it: In a pure JavaScript project, this is what allows your editor to give you autocomplete for express even if you haven't manually installed @types/express.
    Note: In a pure TypeScript project, you usually manage types via npm install, so this becomes less critical but is still helpful for the editor.

2. include

    What it is: A list of specific libraries you want TypeScript to go and find types for, even if they aren't explicitly imported in your code yet.
    Example: If you're planning to use jquery later, you could put it here to have the types ready.

3. exclude

    What it is: Tells TypeScript not to look for types for certain libraries.
    Why use it: Sometimes the automatic "Type Acquirer" gets confused and downloads the wrong version of types for a library, causing red squiggly lines in your editor. You can use exclude to tell it to stop trying for that specific package.

4. disableFilenameBasedTypeAcquisition

    What it is: Usually, if you have a file named jquery.js, TypeScript assumes you are using the jQuery library and automatically tries to download its types.
    Why use it: If you happen to name a local file maria.js but it has nothing to do with the MariaDB library, you might want to turn this on so TS doesn't waste time looking for MariaDB types.

The "Type Acquisition" Snippet for your Wiki

```JSON
{
  /* This is a top-level object, just like compilerOptions. */
  "typeAcquisition": {
    "enable": true,                              // Enables the automatic fetching of @types for your JS libraries.
    "exclude": ["old-broken-lib"],               // Specifically ignore these libraries when auto-fetching types.
    "include": ["node"],                         // Specifically ensure these types are always downloaded.
    "disableFilenameBasedTypeAcquisition": false // Prevents TS from guessing types based on your filenames.
  }
}
```
