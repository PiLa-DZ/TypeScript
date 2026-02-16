// 1. The_Identity_Function <T>(arg: T): T
function identity<T>(arg: T): T { return arg; }
const output = identity<string>("Arch Linux"); // output is type 'string'

// 2. Generics_in_Interfaces <T>
interface ApiResponse<T> { data: T; }
const userRes: ApiResponse<{ name: string }> = { data: { name: "Ali" }, };

// 3. Generics_in_Classes <T>
class Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
}
const userRepo = new Repository<{ username: string }>();
userRepo.add({ username: "gemini_user" });

// 4. Generic_Constraints <T extends HasId>
interface HasId { id: number; }
function logId<T extends HasId>(item: T) {
  console.log(`The ID is: ${item.id}`); // Safe because of 'extends'
}
logId({ id: 101, name: "Keyboard" }); // ✅ Valid
logId({ name: "Mouse" });             // ❌ Error: Missing 'id'

// 5. Using_Type_Parameters_in_Constraints <T, K extends keyof T>
function getProperty<T, K extends keyof T>(obj: T, key: K) { return obj[key]; }
const user = { id: 1, username: "archie" };
getProperty(user, "username"); // ✅ Valid
getProperty(user, "email");    // ❌ Error: "email" is not a key of user

// 6. Generic_Classes_Deep-Dive <T>
class DataStore<T> {
  private data: T[] = [];
  addItem(item: T) { this.data.push(item); }
  getItem(index: number): T { return this.data[index]; }
}
// Creating a store specifically for User objects
interface User { name: string; age: number; }
const userStore = new DataStore<User>();

userStore.addItem({ name: "Ali", age: 25 });
const firstUser = userStore.getItem(0); // TS knows this is a 'User'

// 7. Default_Values_for_Generics <T = string>
interface Container<T = string> { content: T; }
const box1: Container = { content: "Hello" };     // T is string
const box2: Container<number> = { content: 100 }; // T is number
