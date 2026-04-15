const str = "JavaScript";

console.log(str.length); // 10
console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.toLowerCase()); // javascript
console.log(str.includes("script")); // false
console.log(str.includes("Java")); // true
console.log(str.startsWith("java")); // false
console.log(str.endsWith("Script")); //true
console.log(str.indexOf("a")); // 1
console.log(str.indexOf("z")); // -1
console.log(str.slice(0, 4)); // Java
console.log(str.slice(4)); //ript ************** Script
console.log(str.replace("Script", "script")); //Javascript

console.log("==========");

const str1 = "a, b, c";
const arr = str1.split(",");
console.log(arr); // [a, b, c]

const str2 = " hello ";
console.log(str2.trim()); // hello

const str3 = "ha";
console.log(str3.repeat(3)); // hahaha

const str4 = "hello";
console.log(str4.charAt(1)); // e
