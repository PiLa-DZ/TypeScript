Backwards-Compatibility (If you are starting a new project in 2024+, ignore this entire category)

    Backwards-Compatibility_Options (suppressExcessPropertyErrors, suppressImplicitAnyIndexErrors, noImplicitUseStrict, keyofStringsOnly)

```JSON
{
  "compilerOptions": {
    /* -----------------------------------------------------------------
       BACKWARDS COMPATIBILITY (LEGACY)
       Only use these if you are working on a project from 2018 or older.
       ----------------------------------------------------------------- */

    /* Allows objects to have extra properties without throwing an error. */
    "suppressExcessPropertyErrors": false,

    /* Allows accessing properties on objects using any string key. */
    "suppressImplicitAnyIndexErrors": false,

    /* Disables the automatic insertion of "use strict" in JS files. */
    "noImplicitUseStrict": false,

    /* Forces 'keyof' to ignore numbers and symbols (Old TS behavior). */
    "keyofStringsOnly": false
  }
}
```
