// Challenge 1: The "Swapper" (Medium)
// Goal: Take an object and swap the keys and values.
// Input:
type Colors = {
  RED: "red_hex";
  BLUE: "blue_hex";
};

// Target Output:
// type Swapped = {
//   red_hex: "RED";
//   blue_hex: "BLUE";
// };

type Swapper = { [K in keyof Colors as Colors[K]]: K };
