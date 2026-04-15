let num1;
let num2;
let num3;

num1 = 5;
num2 = 3;
console.log(-num1); // -5
console.log(num1 + num2); // 8
console.log(num1 - num2); // 2
console.log(num1 * num2); // 15
console.log(num1 / num2); // 1.666...
console.log(num1 % num2); // 2

console.log("==========");

console.log(123 == 123); // T
console.log(123 == "123"); // T
console.log(123 === "123"); // F
console.log(123 === 123); // T

console.log(123 != 123); // F
console.log(123 != "123"); // F
console.log(123 !== "123"); // T
console.log(123 !== 123); // F

console.log("==========");

num1 = 5;
num2 = 3;
num3 = 2;

console.log(num1 > num2 && num2 > num3); // T
console.log(num1 == num2 && num1 > num2); // F
console.log(num1 == num2 || num1 > num2); // T

console.log(num1 - num2 > num2 - num3 && num2 === 0); // F
console.log(num1 + num2 > num3 || num3 > 0); // T

console.log("==========");

let num = 0;
console.log(num); // 0
num++;
console.log(num); // 1
num--;
console.log(num); // 0

num = 1;
console.log(num++); // 1
num = 1;
console.log(++num); // 2
num1 = num++;
console.log(num1); // 2
console.log(num); // 3

console.log("==========");

const age = 20;
const result = age > 19 ? "나는 성인입니다." : "나는 미성년자입니다.";
console.log(result);

console.log("==========");
