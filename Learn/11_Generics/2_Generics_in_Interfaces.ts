// ============================================================
// The "Linked List" Node)
interface Node1<T> {
  value: T;
  next: Node1<T> | null; // Recursion! It points to another node of the same type.
}

const list: Node1<number> = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: null,
    },
  },
};

console.log(list.value); // 10
console.log(list.next?.value); // 20
console.log(list.next?.next?.value); // 30

// ============================================================
// Generics in Interfaces
// This is how you create standardized shapes for your API.
// Instead of creating
// a UserResponse,
// ProductResponse,
// and OrderResponse,
// you create one Generic Response.

interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

// Now you can reuse it for anything!
const userRes: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "Ali" },
  message: "Success",
};
