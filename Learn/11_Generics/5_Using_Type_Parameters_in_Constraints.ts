// Using Type Parameters in Constraints
// You can even make one generic type depend on another. This is extremely common when writing database helpers where you want to ensure you are accessing a valid key of an object.

// The keyof operator is the secret sauce here:

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, username: "archie" };

getProperty(user, "username"); // ✅ Valid
// getProperty(user, "email"); // ❌ Error: "email" is not a key of user
