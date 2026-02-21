"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myBoolean = true; // boolean
let myNumber = 42; // number
let myString = "John Doe"; // string
let myUndefined; // undefined
let myNull; // null
function noop() {
    return; // Void
}
const msg = () => console.log("msg"); // void
class Car {
    model;
    constructor(model) {
        this.model = model;
    }
} // class
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Guest"] = 0] = "Guest"; /* 0 */
    UserRole[UserRole["User"] = 1] = "User"; /* 1 */
})(UserRole || (UserRole = {})); // 1. Numeric Enums
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {})); // 2. String Enums
let tags = ["node", "express"]; // Array
let scores = [10, 20, 30]; // Array
// const myObject: { name: string } = { name: "Jol" }; // Object
const myObject;
