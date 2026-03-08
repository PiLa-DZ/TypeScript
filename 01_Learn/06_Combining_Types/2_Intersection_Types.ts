// Intersection_Types
// If Union Types are the "OR," then Intersection Types are the "AND."

// ============================================================
// 1. The Syntax
// You use the ampersand & to join types together.
type Admin = {
  privileges: string[];
};

type User = {
  id: number;
  username: string;
};

// Intersection: A person who is BOTH a User and an Admin
type SuperUser = User & Admin;

const boss: SuperUser = {
  id: 1,
  username: "Archie",
  privileges: ["delete_user", "reboot_server"], // Must have all properties!
};

// ============================================================
// 2. Real-World Backend Use Case: API Responses
// When building your Express API, you often want a standard response format that carries different types of data.

type ApiResponse = {
  status: number;
  message: string;
};

type UserData = {
  user: { name: string; email: string };
};

// Combine them for a specific endpoint
type UserResponse = ApiResponse & UserData;

const response: UserResponse = {
  status: 200,
  message: "Success",
  user: { name: "Ali", email: "ali@arch.linux" },
};
