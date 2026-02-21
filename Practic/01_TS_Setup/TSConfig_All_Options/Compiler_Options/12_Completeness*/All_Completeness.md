Completeness:
    control whether TypeScript should spend its energy 
    checking the health of the library files 
    you've imported (like those inside node_modules).

1. skipLibCheck

    What it is: Tells TypeScript not to type-check all the .d.ts files inside your node_modules.
    Why you need it: Many NPM packages have small type errors that they haven't fixed yet. If you don't turn this on, your build might fail because of a bug in a library you didn't even write!
    Performance: This is the #1 way to speed up your compilation. It tells TS: "Trust that the libraries I installed are correct; only check my code."

2. skipDefaultLibCheck

    What it is: A more specific version of the above. It skips checking the default library files (the ones that define things like Console, JSON, and Math).
    Why use it: Since skipLibCheck covers this and more, you rarely use this one specifically. It's mostly kept for very niche scenarios where you want to check some libraries but not the core language ones.
