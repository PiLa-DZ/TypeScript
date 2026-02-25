// ============================================================
// 1. The Execution Stages (The "Order of Operations")
// When you have multiple decorators on a single class or method, they don't all run at the same time. They follow a specific "Waterfall" logic.
// Evaluation (Top-to-Bottom): The computer looks at each decorator from the top one down to the bottom to see what they are.
// Execution (Bottom-to-Up): This is the "Inception" stage. The decorator closest to the method runs first, and its result is passed to the one above it.

@First
@Second
method() {}

// 1. Evaluate First
// 2. Evaluate Second
// 3. Execute Second
// 4. Execute First

// ============================================================

This is the "Inception" part of TypeScript. When you have a single method with 3 or 4 decorators stacked on top of it, the order in which they run is extremely specific.

If you get this wrong in a **MariaDB** app, you might try to **Log** a query before it has even been **Validated**, or try to **Authorize** a user after the query has already finished!

The Order of Operations follows two distinct phases: **Evaluation** and **Execution**.

---

### 1. The Two-Phase Rule

Think of it like a **U-Shape** or a "Waterfall."

1. **Evaluation (Top-to-Bottom):** TypeScript looks at the decorators from top to bottom to "prepare" them. It’s like a chef reading a recipe list.
2. **Execution (Bottom-to-Top):** The decorators actually run their logic starting from the one closest to the method and moving outward.

---

### 2. See it in Action (Try this in your Console)

Copy this into your playground. I’ve added logs so you can see the "heartbeat" of the code:

```typescript
function First() {
  console.log("Evaluation: First"); // Phase 1
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("Execution: First"); // Phase 2
  };
}

function Second() {
  console.log("Evaluation: Second"); // Phase 1
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("Execution: Second"); // Phase 2
  };
}

class Database {
  @First()
  @Second()
  save() {
    console.log("Method: Save called");
  }
}

```

**The Output will be:**

1. `Evaluation: First`
2. `Evaluation: Second`
3. **`Execution: Second`** (The bottom one runs its logic first!)
4. **`Execution: First`**

---

### 3. Why does it work this way? (The "Wrapping" Concept)

Imagine you are wrapping a gift (the method).

* The **Bottom Decorator** (`@Second`) is the wrapping paper. It touches the gift directly.
* The **Top Decorator** (`@First`) is the ribbon. It goes on top of the paper.

In code, the top decorator "wraps" around the result of the bottom decorator. This is called **Composition**.

---

### 4. Real World MariaDB Example: Security & Logging

This is why the order is dangerous. Look at these two:

```typescript
class UserRepo {
  @Log()       // Should this run if the user is blocked?
  @Authorize() // This checks if the user has permission
  deleteUser() {}
}

```

* Because **Execution is Bottom-to-Top**, `@Authorize` runs first.
* If `@Authorize` throws an error because the user isn't an Admin, the `@Log` decorator (the one above it) might never even finish executing for that call.
* This is good! You don't want to log a "Success" if the authorization failed.

---

### 💡 The "Architect's Summary"

* **Evaluation:** Top $\rightarrow$ Bottom (Preparation)
* **Execution:** Bottom $\rightarrow$ Top (Action)

If you have a decorator that **changes data** and a decorator that **checks data**, always put the "checker" closer to the method (at the bottom) so it sees the data first.

**Does that "Bottom-to-Top" execution make sense now? It's basically a stack of filters!**

**Would you like to try writing a "Chain" of three decorators: one for `@MeasureTime`, one for `@Authorize`, and one for `@Validate`?**
