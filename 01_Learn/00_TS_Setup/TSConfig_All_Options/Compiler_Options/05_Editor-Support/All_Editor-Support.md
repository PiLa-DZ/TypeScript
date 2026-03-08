These two options are the "knobs" 
you turn when the project gets too big 
or when you want to add "superpowers" to your editor.

1. disableSizeLimit

    What it is: TypeScript has a built-in memory limit (usually 20MB of source code) to prevent the language server from crashing your computer if it accidentally tries to parse a massive folder (like a misconfigured node_modules).
    Why use it: In very large backend projects (thousands of files), the editor might stop showing you types or autocomplete because it hit this limit. Setting this to true removes that safety net.
    Wiki Note: For a standard Express/MariaDB project, you will never need this. But if your Neovim suddenly stops "seeing" types in a massive project, this is the first thing to check.

2. plugins

    What it is: An array of objects that adds extra features to the TypeScript Language Service (the thing that powers your Neovim autocomplete).
    Why use it: To get better "Intellisense" for things that aren't pure TypeScript.
    Examples: * typescript-styled-plugin: For CSS-in-JS.
    ts-sql-plugin: To get SQL syntax highlighting and errors inside your TypeScript strings (amazing for your MariaDB queries!).
