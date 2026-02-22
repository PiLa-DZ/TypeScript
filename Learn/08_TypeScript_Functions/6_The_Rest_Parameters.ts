// 6. The "Rest" Parameters
// In modern JavaScript, we use the spread operator (...). In TypeScript, we type it as an array.

function sum(...numbers: number[]): number {
  // 'numbers' is treated as a standard JavaScript array
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
