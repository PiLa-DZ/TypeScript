interface Counter {
  (start: number): string; // The function part
  interval: number; // ------ The object property part
  reset(): void; // --------- The object method part
}

function getCounter(): Counter {
  let counter = function (start: number) {
    return `Count: ${start}`;
  } as Counter;
  counter.interval = 123;
  counter.reset = function () {
    console.log("Resetting...");
  };
  return counter;
}

const c = getCounter();
console.log(c(10)); // Works as a function -------> Count: 10
c.reset(); // Works as an object -----------------> Resetting...
console.log(c.interval); // Works as a property --> 123
