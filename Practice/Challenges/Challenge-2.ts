// Challenge 2: The "Function Creator" (Hard)
// Goal: In your MariaDB project, you might want to auto-generate "Setter" functions.
// Input:

type User = {
  name: string;
  age: number;
  1: string;
};

// Target Output:
// type UserSetters = {
//   setName: (val: string) => void;
//   setAge: (val: number) => void;
// };

type UserSetters = {
  [K in keyof User as `get${Capitalize<string & K>}`]: (val: User[K]) => void;
};
