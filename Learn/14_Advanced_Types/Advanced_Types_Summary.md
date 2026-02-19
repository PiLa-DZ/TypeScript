1.  Mapped Types: Transforms properties of an existing type.
    Syntax: [K in keyof T]

2.  Conditional Types: Acts as an if/else for types.
    Syntax: T extends U ? X : Y

3.  Literal Types: Represents an exact, specific value.
    Example: let a: "admin"

4.  Template Literal Types: Builds string types using backticks and patterns.
    Example: type Shirt = ${Size}-${Color}-shirt

5.  Recursive Types: A type that references itself to model nested data structures.
    Example: type Category = { name: string; subCategories?: Category[] }
