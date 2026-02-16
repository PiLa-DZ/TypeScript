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
  message: "Success"
};
