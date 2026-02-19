// Generic Classes (Deep Dive)
// In a backend architecture, you often use a BaseService or BaseRepository. This allows you to handle MariaDB operations generically.

class DataStore<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItem(index: number): T {
    return this.data[index];
  }
}

// Creating a store specifically for User objects
interface User { name: string; age: number; }
const userStore = new DataStore<User>();

userStore.addItem({ name: "Ali", age: 25 });
const firstUser = userStore.getItem(0); // TS knows this is a 'User'
