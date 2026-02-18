1.  Internal vs. External: Internal (Namespaces) uses global scope; External (Modules) uses import/export. Use External for modern backend.
2.  Namespaces: Grouping related code under one name. Common before ES6 standard.
3.  Ambient Modules: Used for untyped libraries or global declarations. (declare module "name")
4.  External Modules: The standard for Node.js. Supports Named exports, Default exports, Namespace imports (* as DB), and Type-only imports. Uses 'Barrels' for re-exporting.
5.  Namespace Augmentation: Extending third-party interfaces (e.g., adding properties to Express Request).
6.  Global Augmentation: Modifying the global scope, like typing process.env. (declare global)
