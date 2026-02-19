// Readonly and Getters/Setters
// readonly: Prevents a property from being changed after the constructor finishes.

// Getters/Setters: Allow you to add logic when getting or setting a value (like validating an email).

class Account {
  readonly id: string = "ACC_001";
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("No negative money!");
    this._balance = amount;
  }
}
