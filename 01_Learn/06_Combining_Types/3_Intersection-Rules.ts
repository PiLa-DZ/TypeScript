// ============================================================
// Intersection-Rules
// ============================================================

// ============================================================
// 3. Important Rule: Conflict
// If you try to intersect two types that have the same property name but different types, TypeScript will create a type called never because it's impossible to be both.
type A = { id: string };
type B = { id: number };

type C = A & B;
// id is now 'never' because it cannot be a string AND a number at the same time.
