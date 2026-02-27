import express from "express";

import { z } from "zod";

const app = express();
app.use(express.json());

// Define the blueprint ONCE
const UserSchema = z.object({
  name: z.string().min(3),
  age: z.number().int().positive(),
});

type ApiResponse =
  | { status: "SUCCESS"; data: IUser }
  | { status: "VALIDATION_ERROR"; message: string }
  | { status: "SERVER_ERROR"; error: any };

interface IUser {
  name: string;
  age: number;
}
let users: IUser[] = [];

app.post("/", (req, res) => {
  try {
    // .safeParse takes 'unknown' and returns a Discriminated Union!
    req.body.age = Number(req.body.age);
    const result = UserSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ status: "ERROR", message: result.error });
    }

    users.push(result.data);
    res.json({ status: "SUCCESS", data: users });
  } catch (err) {
    const errorResponse: ApiResponse = { status: "SERVER_ERROR", error: err };
    res.status(500).json(errorResponse);
  }
});

app.listen(3000);
