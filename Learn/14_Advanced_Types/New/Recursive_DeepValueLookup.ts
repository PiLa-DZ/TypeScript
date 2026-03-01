// ============================================================
// The Challenge: The DeepValueLookup
// ============================================================
// You want to create a type that can reach into a nested object
// of any depth and find a specific value type.
// This is how "Nested Form" or "Nested API" libraries work.
// ============================================================
// Your Goal: Create a type DeepReadonly<T>
// that recursively makes every property—no matter how deep—readonly.

import { settings } from "node:cluster";
import { string } from "zod";

// TypeScript
type Project = {
  id: number;
  metadata: {
    name: string;
    settings: {
      isPublic: boolean;
      tags: string[];
    };
  };
};

// --- YOUR CODE HERE ---
type DeepReadonly<T> = T extends object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;
type a = DeepReadonly<Project>;
// -----------------------

// TEST:
const myProject: DeepReadonly<Project> = {
  id: 1,
  metadata: {
    name: "Arch Linux Suite",
    settings: {
      isPublic: true,
      tags: ["linux", "neovim"],
    },
  },
};

// This should be a RED error in Neovim:
// myProject.metadata.settings.isPublic = false;
