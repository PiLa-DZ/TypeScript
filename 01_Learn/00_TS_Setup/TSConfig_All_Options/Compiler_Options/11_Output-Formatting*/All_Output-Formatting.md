Output-Formatting:
    this all about Readability. 
    As a developer spending a lot of time in the terminal (especially with Neovim), 
    these options determine how easy it is to understand what went wrong when a build fails.

1. pretty

    What it is: Uses colors and spacing to make compiler errors look "pretty" and easier to read.
    Why use it: It adds syntax highlighting to the code snippet in the error message, making the exact location of the bug jump out at you.
    Default: true (in most modern versions).

2. noErrorTruncation

    What it is: Prevents TypeScript from cutting off long error messages with ....
    Why use it: Sometimes you have a complex MariaDB query or a deeply nested Express object. If an error occurs, the standard message might say: Type '{ a: string; b: number; ... }' is not.... With this set to true, you get the full type definition so you can see exactly where the mismatch is.

3. preserveWatchOutput

    What it is: Prevents the terminal from clearing the screen every time you save a file while in "watch mode" (tsc -w).
    Why use it: By default, TS wipes your terminal history on every save. If you want to scroll back and see what the previous error was, or keep track of logs from your Express server, you need this set to true.
