// 4. Void and Never
// In functions, we have two special return types:

// void: The function finishes but returns nothing (common in console.log or "Setters").
// never: The function never finishes (it throws an error or runs an infinite loop).

function throwDbError(msg: string): never {
  throw new Error(msg);
}
