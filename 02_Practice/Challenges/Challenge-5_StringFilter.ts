// The Challenge: The StringFilter
// Your Goal: takes an object and removes any property that isn't a string.
type User = {
  id: number;
  username: string;
  email: string;
  age: number;
  isAdmin: boolean;
};

// --- YOUR CODE HERE ---
type OnlyStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};
// -----------------------

// This should be the result:
/*
{
  username: string;
  email: string;
}
*/

// TEST:
const searchFields: OnlyStrings<User> = {
  username: "arch_user",
  email: "test@linux.org",
  // id: 1,      <-- This should be a RED error!
  // age: 25,    <-- This should be a RED error!
};
searchFields;
