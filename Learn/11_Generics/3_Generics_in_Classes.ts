// ============================================================
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// Usage 1: A store for names (Strings)
const nameStore = new DataStore<string>();
nameStore.add("Gemini");
// nameStore.add(2026); // ❌ Error: Argument is not a string!

// Usage 2: A store for numbers
const scoreStore = new DataStore<number>();
scoreStore.add(95);

// ============================================================
// Generics in Classes (The Repository Pattern)
// In your MariaDB setup, you don't want to write a separate "Save" logic for every single table. You write one Generic Repository.

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userRepo = new Repository<{ username: string }>();
userRepo.add({ username: "gemini_user" });

const productRepo = new Repository<{ sku: string; price: number }>();
