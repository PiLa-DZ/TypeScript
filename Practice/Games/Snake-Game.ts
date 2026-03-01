// ============================================================
// Snake Game Using Just *** TypeScript ***
// ============================================================
// 1. The Grid and The Snake
// We represent the board as a Union of coordinates and the Snake as a Tuple of those coordinates.
type X = 0 | 1 | 2 | 3 | 4;
type Y = 0 | 1 | 2 | 3 | 4;
type Point = { x: X; y: Y };

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

// The Snake is a Tuple: [Head, ...Body]
type Snake = Point[];
// ============================================================
// 2. Moving the Head (The "Math" Engine)
// TypeScript doesn't have + or - for numbers. We have to build an Increment/Decrement Map to move the coordinates.
type Next = { 0: 1; 1: 2; 2: 3; 3: 4; 4: 0 }; // Wraps around (Pac-man style)
type Prev = { 0: 4; 1: 0; 2: 1; 3: 2; 4: 3 };

type MoveHead<Head extends Point, Dir extends Direction> = Dir extends "UP"
  ? { x: Head["x"]; y: Prev[Head["y"]] }
  : Dir extends "DOWN"
    ? { x: Head["x"]; y: Next[Head["y"]] }
    : Dir extends "LEFT"
      ? { x: Prev[Head["x"]]; y: Head["y"] }
      : Dir extends "RIGHT"
        ? { x: Next[Head["x"]]; y: Head["y"] }
        : never;
// ============================================================
// 3. The "Game Tick" (The Recursion)
// This is where the magic happens. We take the current snake and a direction, then "compute" the new snake.
type UpdateSnake<S extends Snake, Dir extends Direction> = S extends [
  infer Head extends Point,
  ...infer Tail,
]
  ? [MoveHead<Head, Dir>, Head, ...Pop<Tail>] // New Head, Old Head, Body minus last bit
  : never;

// Helper to remove the tail (so the snake stays the same length)
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : [];
// ============================================================
// 4. Playing in Neovim
// In your tmux pane, you "play" by wrapping the snake in the UpdateSnake type. To see the next frame, you just look at the type of the next variable.
type Start = [{ x: 2; y: 2 }, { x: 2; y: 3 }]; // Snake at center

// FRAME 1: Move Right
type Frame1 = UpdateSnake<Start, "RIGHT">;
// Hover Frame1 -> [{ x: 3, y: 2 }, { x: 2, y: 2 }]

// FRAME 2: Move Up
type Frame2 = UpdateSnake<Frame1, "UP">;
// Hover Frame2 -> [{ x: 3, y: 1 }, { x: 3, y: 2 }]
// ============================================================
// 5. Visualizing the Board (The "Renderer")
// We can even "render" the board in your LSP using a mapped type!
type RenderRow<YCoord extends Y, S extends Snake> = {
  [XCoord in X]: XCoord extends S[number]["x"] // We check if the current coordinate exists in the snake array
    ? YCoord extends Extract<S[number], { x: XCoord }>["y"]
      ? "🟩"
      : "⬛"
    : "⬛";
};
type RenderBoard<S extends Snake> = {
  [YCoord in Y]: RenderRow<YCoord, S>;
};

type Expand<T> = T extends object ? { [K in keyof T]: Expand<T[K]> } : T;

// Now hover this in Neovim!
type Screen = Expand<RenderBoard<Frame2>>;
