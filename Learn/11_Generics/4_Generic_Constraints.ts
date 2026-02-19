// Generic Constraints (extends)
// Sometimes you don't want to allow any type. You want to say: "This function works with any type, as long as it has an .id property."

interface HasId {
  id: number;
}

function logId<T extends HasId>(item: T) {
  console.log(`The ID is: ${item.id}`); // Safe because of 'extends'
}

logId({ id: 101, name: "Keyboard" }); // ✅ Valid
// logId({ name: "Mouse" });           // ❌ Error: Missing 'id'
