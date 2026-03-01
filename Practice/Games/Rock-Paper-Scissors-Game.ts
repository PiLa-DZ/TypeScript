// ============================================================
// Rock Paper Scissors Game Using Just *** TypeScript ***
// ============================================================
type Move = "Rock" | "Paper" | "Scissors";

// Define the "Battle" outcomes
type Battle<
  Player extends Move,
  Computer extends Move,
> = Player extends Computer
  ? "🤝 It's a Tie!"
  : Player extends "Rock"
    ? Computer extends "Scissors"
      ? "🏆 You Win!"
      : "💀 You Lose!"
    : Player extends "Paper"
      ? Computer extends "Rock"
        ? "🏆 You Win!"
        : "💀 You Lose!"
      : Player extends "Scissors"
        ? Computer extends "Paper"
          ? "🏆 You Win!"
          : "💀 You Lose!"
        : never;

// Let's create a "Session" to track multiple rounds
type PlayRound<P extends Move, C extends Move> = {
  player: P;
  computer: C;
  outcome: Battle<P, C>;
};

// ============================================================
// --- THE GAME BOARD ---
type Round1 = PlayRound<"Rock", "Scissors">;
type Round2 = PlayRound<"Paper", "Scissors">;
type Round3 = PlayRound<"Scissors", "Scissors">;

// Hover over these in Neovim to see the result:
// Round1['outcome'] -> "🏆 You Win!"
// Round2['outcome'] -> "💀 You Lose!"
// Round3['outcome'] -> "🤝 It's a Tie!"
// ============================================================

// A utility to pick a move based on a "Random Seed" (any string/number)
type PickMove<Seed extends string | number> = Seed extends `${any}1${any}`
  ? "Rock"
  : Seed extends `${any}2${any}`
    ? "Paper"
    : "Scissors";

// Now, simulate a game by passing a "random" seed (like a timestamp or string)
type MyGame<YourMove extends Move, SecretSeed extends string> = {
  result: Battle<YourMove, PickMove<SecretSeed>>;
};

// TRY IT: Change the string "123" to something else and see the result change!
type GameResult = MyGame<"Rock", "982">;
