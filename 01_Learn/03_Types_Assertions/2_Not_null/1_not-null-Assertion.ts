// You put a ! after a variable to tell TS: "I promise this is not null or undefined."
let a: string | null = "Archie";

// If you are 100% sure it's not null:
console.log(a!.toUpperCase());
