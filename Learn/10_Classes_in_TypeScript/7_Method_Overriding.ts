// ============================================================
// 1. The Core Syntax: super
// To override a method, you simply define a method with the exact same name in the child class. You often use the super keyword to call the parent’s version of the method before or after your custom logic.

class Mailer {
  send(message: string) {
    console.log(`Sending: ${message}`);
  }
}

class ResendMailer extends Mailer {
  // Overriding the send method
  override send(message: string) {
    console.log("Connecting to Resend API...");
    super.send(message); // Calls the original logic in Mailer
    console.log("Log: Message sent successfully.");
  }
}

// Note on the override keyword: 
// In TypeScript, adding override is optional but highly recommended. 
// It tells the compiler: "I intended to override this." 
// If the parent method name ever changes, 
// TypeScript will throw an error letting you know your override is now "broken."

// ============================================================
// 2. Real-World Backend Case: Model Validation
// Imagine a base Repository class for your MariaDB tables. Every repository can create data, but a UserRepository needs to do extra work.

class BaseRepository {
  create(data: any) {
    console.log("Inserting row into database...");
  }
}

class UserRepository extends BaseRepository {
  override create(data: any) {
    if (!data.email.includes("@")) {
      throw new Error("Invalid email");
    }
    // Now that validation passed, use the base create logic
    super.create(data);
  }
}

// ============================================================
// 3. Rules of Overriding
// To successfully override a method in TypeScript, you must follow these constraints:

// Same Name: Obviously.
// Compatible Signature: The child method must accept the same parameters (or more flexible ones) and return the same type (or a more specific one) as the parent.
// Access Modifiers: You cannot make an overridden method more private. If the parent is public, the child cannot be private.

// ============================================================
// 4. Abstract Methods (The "Pure" Override)
// When using abstract classes, overriding isn't just an option—it's a requirement.

abstract class Controller {
  abstract handle(): void; // No implementation here
}

class AuthController extends Controller {
  override handle() {
    // You MUST implement (override) this, or the code won't compile
    console.log("Handling login...");
  }
}
