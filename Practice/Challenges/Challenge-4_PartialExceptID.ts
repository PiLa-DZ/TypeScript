// The Challenge: The PartialExceptID
// Your Goal: Create a Generic called UpdatePayload<T> that:
// Keeps the id property exactly as it is (Required).
// Makes every other property in the object optional (?).

// The Starter Code
type User = {
  id: number;
  username: string;
  email: string;
  age: number;
};

// Selution 1 ----------- ---------------------------------------
type UpdatePayload<T> = Partial<T> & {
  [K in keyof T as K extends "id" ? K : never]-?: T[K];
};
// ----------------------- ---------------------------------------

// Selution 2 ----------- ---------------------------------------
type UpdatePayload2<T extends { id?: any }> = {
  [P in "id"]-?: T[P];
} & Partial<T>;
// ----------------------- ---------------------------------------

// This should be the result:
/*
{
  id: number;           // Still required
  username?: string;    // Now optional
  email?: string;       // Now optional
  age?: number;         // Now optional
}
*/
// TEST:
const goodUpdate: UpdatePayload<User> = {
  id: 1,
  email: "new@archlinux.org",
};
goodUpdate;

const badUpdate: UpdatePayload<User> = {
  email: "oops@missing-id.com", // This should show a RED error in Neovim!
};
badUpdate;
