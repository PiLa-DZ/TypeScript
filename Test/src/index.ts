// The Challenge: The DeepValueUnion
// Create a recursive type called AllValues<T>
// that travels into every level of an object and
// returns a Union of every single "leaf" value

// (the strings, numbers, and booleans) it finds.
type CategoryTree = {
  name: "Electronics";
  count: 100;
  sub: {
    name: "Computers";
    count: 50;
    sub: {
      name: "Laptops";
      count: 20;
    };
  };
};
// Hover over 'Step1' in Neovim.
// You will see: "Electronics" | 100 | { name: "Computers", ... }

// --- YOUR CODE HERE ---
type AllValues<T> = T extends object
  ? AllValues<T[keyof T]> // If it's an object, recurse into its values
  : T; // If it's a "leaf" (string/number), return it

type Result = AllValues<CategoryTree>;
let a: Result;
a = "Electronics";

type AllValuesDebug<T, Trace = "root"> = T extends object
  ? AllValuesDebug<T[keyof T], Trace | "going deeper">
  : T;

type DebugInfo = AllValuesDebug<CategoryTree>;
