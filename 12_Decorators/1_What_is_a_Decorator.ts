// ============================================================
// ### Step 1: The Setup
// To follow along, make sure your tsconfig.json has:
// "experimentalDecorators": true

// ============================================================
// ### Step 2: Create the Decorator Function
// A decorator is just a function. When you put @Log above a method, TypeScript calls this function for you.

// This is the decorator logic
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // 1. Save the original function (the one you are decorating)
  const originalMethod = descriptor.value;

  // 2. Replace it with a new "wrapped" version
  descriptor.value = function (...args: any[]) {
    console.log(`--- Before calling ${propertyKey} ---`);
    
    // 3. Run the original function
    const result = originalMethod.apply(this, args);
    
    console.log(`--- After calling ${propertyKey} ---`);
    
    return result;
  };
}

// ============================================================
// ### Step 3: Apply the Decorator
// Now, we use the @ symbol to "attach" that logic to a class method.
class MessageSender {
  @Log // NOTE: If show error here it's just you have to do Step 1
  send(text: string) {
    console.log(`Execution: Sending message -> ${text}`);
  }
}

// TEST IT
const sender = new MessageSender();
sender.send("Hello World");
// Output:
// --- Before calling send ---
// Execution: Sending message -> Hello World
// --- After calling send ---
