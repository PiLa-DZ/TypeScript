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

// ============================================================
// Create a "Debug" type for just the first level
type Step1 = CategoryTree[keyof CategoryTree];

// Hover over 'Step1' in Neovim.
// You will see: "Electronics" | 100 | { name: "Computers", ... }
// ============================================================
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

// Use it to force the LSP to show the final result clearly
type FinalResult = Prettify<AllValues<CategoryTree>>;
// ============================================================
type AllValuesDebug<T, Trace = "root"> = T extends object
  ? AllValuesDebug<T[keyof T], Trace | "going deeper">
  : T;

type DebugInfo = AllValuesDebug<CategoryTree>;
