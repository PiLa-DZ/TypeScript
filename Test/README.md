TypeScript exercises
https://typescript-exercises.github.io/#exercise=6&file=%2Findex.ts
Template Literal

- final boss of TypeScript
```ts
const user = {
  name: "Jol",
  age: 31,
  1: "33",
  fiv: {
    a: true,
    b: "a",
    c: { a: "B", b: 2 },
  },
};

type Path<T> = T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? `${K}` | `${K}.${Path<T[K]>}`
        : never;
    }[keyof T]
  : never;

function getDeep<T>(obj: T, path: Path<T>) {
  return path.split(".").reduce((acc: any, key) => acc?.[key], obj);
}

console.log(getDeep(user, "fiv.c.b"));
```
- Indexed Access on a Mapped Type.
- "tricks" in advanced TypeScript `{...}[keyof T]`

- Mapped Types, Indexed Access, and Type Stripping
