// 2. Extending Interfaces (Inheritance)
// One of the biggest strengths of Interfaces is their ability to build on top of each other. This is much cleaner than using Intersections (&) for objects.

interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
  role: "admin" | "editor";
}

// Employee now has 'name', 'salary', and 'role'
