JavaScript-Support is specifically for projects that are in a "Mixed State"
part JavaScript and part TypeScript. 
you might think you don't need these, 
but they are very helpful when you use older MariaDB or Express libraries that don't have built-in types.


allowJs
checkJs
maxNodeModuleJsDepth

1. allowJs (The "Mixed Marriage")

    What it does: Allows JavaScript files (.js) to be imported and compiled alongside your TypeScript files.
    Why use it: If you have an old database utility script written in JS and you don't want to rewrite it in TS yet, you turn this on so you can import it into your TS server.
    Wiki Note: Without this, TypeScript will ignore every .js file in your src folder.

2. checkJs (The "Secret Agent")

    What it does: Tells TypeScript to look at your .js files and report errors in them just like it does for .ts files.
    How it works: It uses JSDoc comments (the /** @type {string} */ style) to understand the types in the JS file.
    Why use it: It's a great way to get type safety in a JavaScript file without actually renaming the file to .ts.

3. maxNodeModuleJsDepth

    What it does: Tells TypeScript how deep into your node_modules folder it should go to find and check JavaScript files.
    Default: 0.
    Why use it: Sometimes a library you installed is written in messy JS. If you set this to 1 or 2, TypeScript will try to "look inside" that library's code to figure out the types for you.
    Warning: Increasing this number can make your compiler very slow because it has to read thousands of extra files.
