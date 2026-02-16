// ============================================================
// 1. Inheritance (The "is-a" Relationship)
// Inheritance is about reusability. 
// You create a parent class with shared logic, 
// and child classes "inherit" that logic so you don't have to rewrite it.

// Backend Example:
// Imagine you have different types of users in your MariaDB database.

class User {
  constructor(public email: string) {}
  
  save() {
    console.log(`Saving ${this.email} to the database...`);
  }
}

class Admin extends User {
  deleteEverything() {
    console.log("Deleting database... (Don't do this!)");
  }
}

const boss = new Admin("boss@arch.org");
boss.save(); // ✅ Inherited from User

// Key Benefit: You only write the save() logic once.

// ============================================================
// 2. Polymorphism (The "Many Shapes" Concept)
// Polymorphism is about flexibility. It’s the ability for different classes to be treated as if they were the same "parent" type, but each one performs the action in its own specific way.

// Backend Example:
// Imagine you support multiple notification methods (Email, SMS, Slack).

abstract class Notifier {
  abstract send(message: string): void;
}

class EmailNotifier extends Notifier {
  send(message: string) {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotifier extends Notifier {
  send(message: string) {
    console.log(`Sending SMS: ${message}`);
  }
}

// POLYMORPHISM IN ACTION:
function notifyAll(notifiers: Notifier[], msg: string) {
  notifiers.forEach(n => n.send(msg)); // We don't care IF it's SMS or Email
}

// Key Benefit: You can add a SlackNotifier later without changing a single line of code in the notifyAll function.
