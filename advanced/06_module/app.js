import { add, multiply } from "./math.js";
import greet from "./greet.js";
import getUserName, { age } from "./user.js";

console.log(add(100, 4));
console.log(multiply(100, 4));
greet("빈영");
greet("선우");
greet("영희");
greet("병선");

console.log(age);
console.log(getUserName());
