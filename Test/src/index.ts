function PD(
  target: any, // The Class Prototype
  methodName: string, // The name of the method the parameter belongs to
  index: number, // The position of the parameter (0, 1, 2...)
) {
  // Logic goes here
  console.log(index);
}
class a {
  b(@PD a: string, b: number, @PD c: boolean) {}
}
// Output:
// 2
// 0
