// Inheritance and Abstract Classes
// In backend architecture, you might have a generic Controller class that specific controllers (like UserController) inherit from.

// extends: Standard inheritance.
// abstract: An abstract class cannot be instantiated directly. It serves only as a base for other classes to implement.


abstract class BaseController {
  abstract handleRequest(): void; // "Children MUST implement this"
  
  log(msg: string) {
    console.log(`[LOG]: ${msg}`);
  }
}

class UserController extends BaseController {
  handleRequest() {
    this.log("Getting users...");
    // logic here
  }
}
