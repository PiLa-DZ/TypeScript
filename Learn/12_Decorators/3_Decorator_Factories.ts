// Step 3: Decorator Factories (Passing Data)
// Now, what if you want to use the same decorator but for different roles? Like @AuthGuard("admin") or @AuthGuard("editor")?

// To do this, you wrap your decorator in a regular function. This is called a Decorator Factory.


// This is a Factory: It takes your input and RETURNS a decorator
function Role(requiredRole: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Checking if user has ${requiredRole} permissions...`);
      return original.apply(this, args);
    };
  };
}

class PostService {
  @Role("editor")
  editPost() { /* logic */ }

  @Role("admin")
  deletePost() { /* logic */ }
}
