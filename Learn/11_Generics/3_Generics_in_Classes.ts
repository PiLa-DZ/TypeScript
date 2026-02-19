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
