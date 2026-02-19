// 3. Function Type Expressions
// Sometimes you want to define the shape of a function before you even write it. This is useful for Callbacks or Middlewares.

// Define the "Blueprint"
type LoggerFn = (message: string, userId: number) => void;

// Apply it to a variable
const logAction: LoggerFn = (msg, id) => {
  console.log(`User ${id}: ${msg}`);
};
