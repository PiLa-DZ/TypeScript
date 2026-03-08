// 1. Basic Syntax
// An interface describes the properties and methods an object must have.

interface User {
  id: number;
  username: string;
  email: string;
  readonly createdAt: Date; // Cannot be changed after creation
  phoneNumber?: string;     // Optional property
}

const newUser: User = {
  id: 1,
  username: "arch_dev",
  email: "dev@archlinux.org",
  createdAt: new Date()
};

