function log(target: any, key: string) {
  console.log(target, key);
}

class a {
  @log
  public c: number;
  constructor(c: number) {
    this.c = c;
  }
  b() {}
}
a.prototype.b();
// Evaluation: Done
// Execution/Setup: Done
// ACTUAL RUNTIME CALL: Done
