// If Exclude is the "Eraser" that rubs out specific options, Extract is the "Highlighter."
//
// It looks at a long list of options (a Union Type) and keeps only the ones that match your criteria. 
// It is the perfect tool for finding the "common ground" between two different sets of types.

// ============================================================
// 1. The Real-World Problem
// Imagine you have a broad type representing all possible data types that your MariaDB database supports. 
// However, you are writing a specific function that only works with text-based data.

// Instead of manually creating a new type, you "extract" the strings from the main list.

// ============================================================
// 2. The Solution: Extract<Type, Union>
// Extract takes two arguments:

// [1] --> T: The full Union Type (the source).
// [2] --> U: The types you want to keep.

type AllPossibleValues = string | number | boolean | (() => void);

// We only want to keep the types that are "assignable" to string
type OnlyStrings = Extract<AllPossibleValues, string>; 

// Resulting OnlyStrings: string

// ============================================================
// 3. Extracting specific "Categories"
// This is very useful when you have a large list of string literals 
// (like roles or statuses) and you want to extract a specific sub-group.

type UserAction = 
  | "create_user" 
  | "delete_user" 
  | "update_user" 
  | "view_post" 
  | "comment_post";

// Extract only the actions related to "users"
type UserManagementActions = Extract<UserAction, `create_user` | `delete_user` | `update_user`>;

// Or even cooler, using a partial string match:
type AllUserActions = Extract<UserAction, `${string}_user`>;

// Resulting AllUserActions: "create_user" | "delete_user" | "update_user"

// ============================================================
// 4. Why use this in your Backend?
// Permission Systems: If you have a massive list of all permissions in your app, you can extract just the "Read-Only" ones for Guest users.
// Refining Database Results: If a MariaDB query returns string | null | undefined, and you have a function that only handles string, you can use Extract to define what the "Clean" data should look like.



