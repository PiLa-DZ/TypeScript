interface HasId {
  id: number;
}

function processEntity<T extends HasId>(item: T) {
  console.log("Processing ID:", item.id);
  return item; // It returns the FULL object back
}

// TEST 1: The "Exact" match
processEntity({ id: 101 }); // ✅ Works

// TEST 2: The "Extra" match (More common)
const user = { name: "Gemini", role: "Admin", id: 500 };
const result = processEntity<HasId>(user); // ✅ Works!
// Even though 'user' has name and role, it meets the "Minimum Requirement" of having an ID.

console.log(result); // ✅ TypeScript still remembers it has a 'role'!
