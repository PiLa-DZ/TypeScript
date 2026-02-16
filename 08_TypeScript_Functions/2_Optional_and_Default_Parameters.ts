// 2. Optional and Default Parameters
// In Node.js, you often have functions where some arguments aren't always needed (like a limit on a database query).

function getItems(table: string, limit?: number, offset: number = 0) {
  // limit is: number | undefined
  // offset is: number (defaults to 0)
}

getItems("users");          // ✅ Valid
getItems("users", 10);      // ✅ Valid
getItems("users", 10, 20);  // ✅ Valid
