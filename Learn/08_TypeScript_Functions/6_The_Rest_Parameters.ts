// 6. The "Rest" Parameters
// In modern JavaScript, we use the spread operator (...). In TypeScript, we type it as an array.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
