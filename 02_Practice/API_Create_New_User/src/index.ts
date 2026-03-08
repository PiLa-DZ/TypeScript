import express from "express";

const app = express();
app.use(express.json());

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
    let body = req.body as unknown;
    // ============================================================
    // BodyGuard 1 --> Make sure Body is an Object and not null
    if (typeof body !== "object" || body === null) {
      const resMsg: ApiResponse = {
        status: "VALIDATION_ERROR",
        message: "Body is null or not object",
      };
      return res.status(400).json(resMsg);
    }

    // ============================================================
    // BodyGuard 2 --> Make sure Body has { name, age } Properity
    if (!("name" in body) || !("age" in body)) {
      const resMsg: ApiResponse = {
        status: "VALIDATION_ERROR",
        message: "name and age are requred!",
      };
      return res.status(400).json(resMsg);
    }
    const userBody = body as { name: unknown; age: unknown };

    // ============================================================
    // BodyGuard 3 --> Make sure data is valide
    userBody.age = Number(userBody.age);
    if (
      typeof userBody.name !== "string" ||
      userBody.name === "" ||
      typeof userBody.age !== "number" ||
      Number.isNaN(userBody.age) ||
      !Number.isInteger(userBody.age) ||
      userBody.age <= 0
    ) {
      const resMsg: ApiResponse = {
        status: "VALIDATION_ERROR",
        message: "Invalid name or age",
      };
      return res.status(400).json(resMsg);
    }
    const newUser: IUser = { name: userBody.name, age: userBody.age };
    users.push(newUser);
    const resMsg: ApiResponse = {
      status: "SUCCESS",
      data: newUser,
    };

    res.status(200).json(resMsg);
  } catch (err) {
    const errorResponse: ApiResponse = { status: "SERVER_ERROR", error: err };
    res.status(500).json(errorResponse);
  }
});

app.listen(3000);
