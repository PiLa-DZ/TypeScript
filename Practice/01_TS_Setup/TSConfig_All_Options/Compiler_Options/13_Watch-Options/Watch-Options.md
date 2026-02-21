Watch-Options ( assumeChangesOnlyAffectDirectDependencies )

What it is: 
    Usually, 
    when you change a file, 
    TypeScript re-checks that file and every other file 
    that might be affected by that change—even files deep down the chain.

What this flag does: 
    It tells the compiler: 
    "When I change a file, 
    only re-check the files that directly import it."

Why use it: 
    It significantly reduces the amount of work 
    the compiler does during development, 
    leading to much faster "re-build" times.

The Risk: 
    In rare cases, 
    a change in File A might break File C (which only imports File B), 
    but TypeScript won't catch it immediately because it didn't check File C. 
    You would only see the error the next time you do a full build.


```JSON
{
  "compilerOptions": {
    /*
    💡 Strategy
        For Development: Turn it on to keep your Neovim and server fast.
        For CI/CD (Production): Turn it off (which is the default) to ensure every single connection in your code is perfectly typed before shipping.
    */
    "assumeChangesOnlyAffectDirectDependencies": true // Speed up watch mode by only checking files that directly import the file you just changed.
  }
}
```
