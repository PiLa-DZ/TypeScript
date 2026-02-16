// 1. Parameter_and_Return_Typing
function add(a: number, b: number): number { ... }

// 2. Optional_and_Default_Parameters (?, =)
function getItems(table: string, limit?: number, offset: number = 0) { ... }

// 3. Function_Type_Expressions (Blueprint)
type LoggerFn = (message: string, userId: number) => void;

// 4. Void_and_Never (it throws an error or runs an infinite loop)
function throwDbError(msg: string): never { throw new Error(msg); }

// 5. Function_Overloads (depending functions)
function getUser(id: number): string;
function getUser(username: string): string;

// 6. The_Rest_Parameters (...)
function sumAll(...numbers: number[]): number { ... }

