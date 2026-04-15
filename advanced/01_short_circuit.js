console.log(true && "hello"); // hello
console.log(false && "hello"); // false

console.log(true || "hello"); // true
console.log(false || "hello"); // hello

console.log("==========");

let userName = "";
let displayName = userName || "Guest";
console.log(displayName); // Guest

userName = "Wizard";
displayName = userName || "Guest";
console.log(displayName); // Wizard

console.log("==========");

let isLoggedIn = true;
const userProfile = { name: "Alice" };
isLoggedIn && console.log(userProfile.name); // Alice

isLoggedIn = false;
isLoggedIn && console.log(userProfile.name); // 출력없음

console.log("==========");

const name1 = null ?? "Guest";
console.log(name1); // Geust

const name2 = undefined ?? "Guest";
console.log(name2); // Guest

const name3 = "RM" ?? "Guest";
console.log(name3); // RM

const name4 = "" || "Guest";
console.log(name4); // Guest

const name5 = "" ?? "Guest";
console.log(name5); // ""
