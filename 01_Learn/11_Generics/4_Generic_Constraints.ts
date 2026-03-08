// ============================================================
interface HasLength {
  length: number;
}

// "T must have at least everything inside HasLength"
function logLength<T extends HasLength>(item: T): void {
  console.log(item.length); // ✅ Success!
}

// T Structur = HasLength Structur
// T          = HasLength
// T.length   = HasLength.length

// OK:
// str Structur = T Structur = HasLength Structur
let str: string = "Hello";
logLength<string>(str);

// ERROR:
// num Structur != T Structur = HasLength Structur
let num: number = 500;
// logLength<number>(num) // Error

// ============================================================
// Generic Constraints (extends)
// Sometimes you don't want to allow any type.
// You want to say: "This function works with any type, as long as it has an .id property."

interface HasId {
  id: number;
}

function logId<T extends HasId>(item: T) {
  console.log(`The ID is: ${item.id}`); // Safe because of 'extends'
}

logId({ id: 101, name: "Keyboard" }); // ✅ Valid
// logId({ name: "Mouse" });           // ❌ Error: Missing 'id'
