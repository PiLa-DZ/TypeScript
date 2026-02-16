// The Anatomy of a Method Decorator
// Think of a Method Decorator as a Middleman. 
// It stands between the person calling the function and the function itself.

function AuthGuard(target: any, key: string, descriptor: PropertyDescriptor) {
  // 1. We grab the "Original Recipe" (the function code)
  const originalMethod = descriptor.value;

  // 2. We replace the "Original Recipe" with a "New Recipe"
  descriptor.value = function (...args: any[]) {
    const isAdmin = false; // Imagine checking a real session here

    if (!isAdmin) {
      console.log(`Access Denied for method: ${key}`);
      return; // The original function NEVER runs!
    }

    // 3. If everything is okay, we run the original function
    return originalMethod.apply(this, args);
  };
}

class AdminPanel {
  @AuthGuard
  deleteUser(id: number) {
    console.log(`User ${id} has been deleted from MariaDB.`);
  }
}

const panel = new AdminPanel();
panel.deleteUser(99); // This will print "Access Denied"

// Why we use these 3 parameters:
// -- 1. target: We rarely use this in simple decorators, but it's there if you need to know which Class the method belongs to.
// -- 2. key: This is just the name of the method as a string (e.g., "deleteUser"). Great for logging!
// -- 3. descriptor: This is the "brain" of the decorator. It allows you to:
// -- -- Read the original function (descriptor.value).
// -- -- Rewrite the function logic.
// -- -- Make it Read-Only (by setting writable: false).
