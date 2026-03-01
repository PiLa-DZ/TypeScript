```TS
/*
  ____                     _     
 / ___|_   _  __ _ _ __ __| |___ 
| |  _| | | |/ _` | '__/ _` / __|
| |_| | |_| | (_| | | | (_| \__ \
 \____|\__,_|\__,_|_|  \__,_|___/
                                 
|===============================|
| *** Type Guards Narrowing *** |
|===============================|
| Basic                         |
| - - - - - - - - - - - - - - - |
| (instanceof) For Constructur  |
| (typeof) For Primitives       |
| (typeof) Null Problem         |
| (typeof) NaN  Problem         | <-- New Note
| (in) For interface            |
|                               |
|-------------------------------|
| Equality                      |
| - - - - - - - - - - - - - - - |
| (null == undefined)           |
| Literal Unions (==)           |
|                               |
|-------------------------------|
| Truthiness                    |
| - - - - - - - - - - - - - - - |
| Falsy Rule                    |
| Coercion (!!)                 |
| Logical Operators (&&) (||)   |
| Zero Bug (0)                  |
| NaN Bug (Number.isNaN)        | <-- New Note
| Predicates (is)               |
|                               |
|===============================|
*/
```
