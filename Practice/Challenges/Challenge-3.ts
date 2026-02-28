// Challenge 3: The "Required Pick" (Expert)
// Goal: Create a type that makes only specific keys required, while leaving the rest of the object exactly as it was.
// Input:

import type { string } from "zod";

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
