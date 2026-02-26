| *** Utility Types ***
| Partial<T>     | all fields optional
| Readonly<T>    | Make anything readonly
| Record<K,T>    | Create a new structure

| Pick<T,K>      | Select fields
| Omit<T,K>      | Delete fields

| Extract<T,U>   | Select list of choices
| Exclude<T,U>   | Delete list of choices

| NonNullable<U> | Delete null and undefined

| Parameters<typeof function>    | Get Params of function
| ReturnType<typeof function>    | Get Type of return-type
| Awaited<T>                     | Using With (Async Await)
| InstanceType<typeof className> | Extract the Instance Type
