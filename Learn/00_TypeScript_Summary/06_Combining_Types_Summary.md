```TS
// Union_Types
let id: string | number;

// Intersection_Types
type SuperUser = User & Admin;

// Type_Aliases
type User = {
  name: string;
  age: number;
  email: string;
};
function register2(user: User) { ... }

// keyof_Operator
// This creates a new type: "id" | "username" | "email"
type UserKeys = keyof User;
```
