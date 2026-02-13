// 1. The Primitives Type
let email:    string  = "dev@archlinux.org"
let port:     number  = 3000;
let isActive: boolean = true;

// 2. The Collections
let tags:   string[]      = ["node", "express"]; 
let scores: Array<number> = [10, 20, 30];

// 3. The "Empty" Types
let userEmail:  string | undefined; 
let nullVal:    string | null = null;
const msg = (): void => console.log('msg')

// 4. The "Safety" Types (Crucial for Backend)
let myData: any     = "I am a string"; myData = 42; // This Works
let data:   unknown = "Secret Message"; // data.toUpperCase(); // ERROR:
if (typeof data === "string") {
    console.log(data.toUpperCase()); /* Now it's safe! */
}


// 5. Union Type
let id: string | number;
id = 101;       // Valid
id = "A-101";   // Valid
// id = true;      // ERROR: Boolean is not part of the Union

// 6. You Can write types just like this
let a = "any thing"
// ```

