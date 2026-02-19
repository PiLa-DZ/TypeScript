// 1. Basic_Class_Structure ( Property, Constructor, Methods )
class C { 
    P: string; 
    constructor(A: string) { this.P = A }
    M(): void { console.log(this.P) }
}
const NewC = new C("Text");

// 2. Access_Modifiers ( public, private, protected )
class User {
  public username: string;      // Everyone can see
  private hashedPw: string;     // Only the User class can see
  protected internalId: number; // User and its "children" (like Admin) can see
}

// 3. Readonly_and_Get-Set ( readonly, get, set )
class Account {
  readonly id: string = "ACC_001";
  private _balance: number = 0;
  get balance(): number { return this._balance; }
  set balance(amount: number) { if (amount < 0) throw new Error("No negative money!"); this._balance = amount; }
}

// 4. Inheritance_and_Abstract_Classes (abstract, extends)
abstract class BaseController {
  abstract handleRequest(): void; // "Children MUST implement this"
}
class UserController extends BaseController {
  handleRequest() { }
}

// 5. Interfaces_vs_Classes
interface Logger { log(msg: string): void; }
class FileLogger implements Logger { log(msg: string) { /* write to file */ } }

// 6. Inheritance_vs_Polymorphism
abstract class              Notifier { send(msg) {}}
class EmailNotifier extends Notifier { }
class SMSNotifier extends   Notifier { }
function notifyAll(notifiers: Notifier[], msg: string) {
  notifiers.forEach(n => n.send(msg)); // We don't care IF it's SMS or Email
}

// 7. Method_Overriding ( override )
abstract class Controller {
  abstract handle(): void; // No implementation here
}
class AuthController extends Controller {
  override handle() {
    // You MUST implement (override) this, or the code won't compile
    console.log("Handling login...");
  }
}

// 8. Constructor_Overloading
class Point {
  constructor(x: number, y: number);
  constructor(s: string);
}

