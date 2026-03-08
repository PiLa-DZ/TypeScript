// Challenge 1: The "Swapper" (Medium)
// Goal: Take an object and swap the keys and values.
// Input:
type Colors = {
  RED: "red_hex";
  BLUE: "blue_hex";
  a: 1;
};

// Target Output:
// type Swapped = {
//   red_hex: "RED";
//   blue_hex: "BLUE";
// };

// ============================================================
type Swapper = { [K in keyof Colors as Colors[K]]: K };

// ============================================================
type Utility_Swapper<T extends Record<keyof T, string | number>> = {
  [K in keyof T as T[K]]: K;
};

type SwapColors = Utility_Swapper<Colors>;

// ============================================================
type Colors2 = {
  RED: "red_hex";
  BLUE: "blue_hex";
  a: true;
  b: 1;
};
type Utility_Swapper2<T> = {
  [K in keyof T as T[K] extends string | number ? T[K] : never]: K;
};

type SwapColors2 = Utility_Swapper2<Colors2>;
