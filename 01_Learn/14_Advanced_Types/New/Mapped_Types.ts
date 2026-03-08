// Mapped Type:
interface T {
  name: boolean;
  age: number;
  1: boolean;
  sub: { a: string; b: null };
}

// ============================================================
type allString = { [K in keyof T]: string };
type OnlyBooleans = {
  [K in keyof T as T[K] extends boolean ? K : never]: T[K];
}; // Filtering (The "Picker")

// ============================================================
type allOptional = { [K in keyof T]+?: T[K] };
type allRequired = { [K in keyof T]-?: T[K] };
type allReadonly = { +readonly [K in keyof T]: T[K] };
type allWritable = { -readonly [K in keyof T]: T[K] };
type allRename = { [K in keyof T as `my_${K}`]: T[K] }; // Key Remapping

// 1. Filter Keys (The "Exclude" Trick)
type OnlyStringKeys = { [K in keyof T as K extends string ? K : never]: T[K] };

// ============================================================
// 3. Template Literal Transformation
type Getters = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] };
