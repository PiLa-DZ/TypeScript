// Equality_Narrowing
// It relies on the fact that if two variables are strictly equal (===), they must share a type that is compatible with both.

// ============================================================
// 1. How Equality Narrowing Works
// TypeScript uses your comparison operators (===, !==, ==, !=) to filter out possibilities from a Union Type.

function checkValues(x: string | number, y: string | boolean) {
  if (x === y) {
    // Narrowing happens here!
    // For x to equal y, they BOTH must be strings.
    console.log(x.toUpperCase()); // ✅ Valid
    console.log(y.toLowerCase()); // ✅ Valid
  } else {
    // Here, x is still string | number
    // and y is still string | boolean
  }
}

// ============================================================
// 2. Handling null and undefined
// In backend development, you frequently deal with optional data. 
// Equality narrowing is the cleanest way to "filter out" the empty states.

function getDatabaseUri(uri: string | null) {
  if (uri !== null) {
    // 'uri' is now narrowed to just 'string'
    return uri.trim();
  }
  return "localhost:3306";
}

// ============================================================
// 3. The Difference: Strict (===) vs. Loose (==)
// Since you are a professional, you should almost always use ===. 
// However, TypeScript knows the weird quirks of JavaScript's loose equality.

// If you check if (value == null), TypeScript is smart enough to know that this covers both null and undefined.

function process(value: string | null | undefined) {
  if (value == null) {
    // Narrowed to: null | undefined
    return;
  }
  // Narrowed to: string
  console.log(value.toUpperCase());
}


// ============================================================
// 4. Narrowing with Literal Values
// This is common when handling "Status" fields in your API.

type Status = "success" | "error" | "loading";

function handleResponse(status: Status) {
  if (status === "success") {
    // TS knows status is exactly "success" here
  }
}










