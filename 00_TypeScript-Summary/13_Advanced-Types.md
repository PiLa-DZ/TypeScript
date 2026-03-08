```TS
/*
    _       _                               _ 
   / \   __| |_   ____ _ _ __   ___ ___  __| |
  / _ \ / _` \ \ / / _` | '_ \ / __/ _ \/ _` |
 / ___ \ (_| |\ V / (_| | | | | (_|  __/ (_| |
/_/   \_\__,_| \_/ \__,_|_| |_|\___\___|\__,_|
                                              
|========================|
| *** Advanced Types *** |
|========================|
| Mapped Types           | <-| NOTE: Loop over keys
|                        |   | { [ K in keyof T ]: ... }
| - - - - - - - - - - - -|
| Conditional Types      | <-| Logic (The "If")
|                        |   | ( T extends U ? X : Y )   
| - - - - - - - - - - - -|
| Template Literals      | <-| String Manipulation
|                        |   | `${Size}-${Color}-shirt`  
| - - - - - - - - - - - -|
| infer Keyword          | <-| Variable Extraction
|                        |   | `user_${infer Id}`
| - - - - - - - - - - - -|
| Recursive Types        | <-| The "Final Boss" (Deep Trees)
|                        |   | NOTE: Very Hard To Understand
| - - - - - - - - - - - -|
*/
```

