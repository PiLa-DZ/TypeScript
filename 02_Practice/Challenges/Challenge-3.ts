// Challenge 3: The "Required Pick" (Expert)
// Goal: Create a type that makes only specific keys required, while leaving the rest of the object exactly as it was.
// Input:

type Post = {
  title?: string;
  body?: string;
  id: number;
};

// Target Output (Make 'title' required):
// type FinalPost = {
//   title: string; // Now required!
//   body?: string; // Stays optional
//   id: number; // Stays required
// };

// ============================================================
type KakeRequired = Post & {
  [K in keyof Post as K extends "title" ? K : never]-?: Post[K];
};

// ============================================================
type UtilityMakeRequired<T, K extends keyof T> = T & { [i in K]-?: T[i] };

type FinalPost = UtilityMakeRequired<Post, "title">;
