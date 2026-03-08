// ============================================================
// The TypeScript Type System is Turing Complete.
// ============================================================

// ============================================================
// 1. Conditional Logic (The if statement)
type IsString<T> = T extends string ? "Yes, it is a string" : "No, it is not";

type Test1 = IsString<string>; // Result: "Yes, it is a string"
type Test2 = IsString<number>; // Result: "No, it is not"

// ============================================================
// 2. Recursion (The loop)
type RepeatString<
  S extends string,
  N extends number,
  T extends any[] = [],
> = T["length"] extends N ? "" : `${S}${RepeatString<S, N, [...T, any]>}`;

type Result = RepeatString<"Hi!", 3>;
// Result: "Hi!Hi!Hi!"

// ============================================================
// 3. String Manipulation (Pattern Matching)
type GetDomain<Email extends string> = Email extends `${string}@${infer Domain}`
  ? Domain
  : "Invalid Email";

type MyDomain = GetDomain<"user@google.com">;
// Result: "google.com"

// ------------------------------------------------------------
// Putting it all together: A "Type-Level" Calculator
type Accumulator<N extends number, T extends any[] = []> = T["length"] extends N
  ? T
  : Accumulator<N, [...T, any]>;

type Add<A extends number, B extends number> = [
  ...Accumulator<A>,
  ...Accumulator<B>,
]["length"];

type Sum = Add<2, 3>;
// Result: 5
type result = `The answer is ${Sum}`;
// ============================================================
