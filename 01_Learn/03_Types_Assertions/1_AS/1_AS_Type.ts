// Example 1 ==================================================
// This is the "I know what I'm doing" button of TypeScript.
let someData: unknown = "this is a string";
// let len = someData.length; // ERROR

// You assert that it is a string:
let len = (someData as string).length; // SUCCESS

// Example 2 ==================================================
// Imagine you are receiving a request body. TypeScript doesn't know what the user sent until you tell it.
app.post("/login", (req, res) => {
    // We tell TS: "Treat req.body as this specific shape"
    const user = req.body as { username: string; id: number };

    console.log(user.username.toUpperCase()); 
});
