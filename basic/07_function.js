function sayHello() {
  console.log("Hello");
}
sayHello();

console.log("==========");

function sayHello2(name) {
  console.log(`Hello, ${name}`);
}

sayHello2("빈영");
sayHello2(1);
sayHello2(true);

console.log("==========");

function sayHello3(names) {
  names.map((name) => {
    console.log(`Hello, ${name}`);
  });
}

const names = ["영희", "선우", "빈영", "아영", "현영"];
sayHello3(names);

console.log("==========");

function sayHello4(name) {
  return `Hello, ${name}`;
}

const greeting = sayHello4("빈영");
console.log(greeting);
console.log(sayHello4("선우"));

console.log("==========");

function add(num1, num2) {
  return num1 + num2;
}

const result = add(5, 7);
console.log(result);

console.log("==========");

function sayHello4(name) {
  console.log("함수 시작");
  return;
  console.log("실행 안됨");
}

const greeting3 = sayHello4("선우");
console.log(greeting3);

console.log("==========");

const sayHello5 = sayHello;
sayHello5();
sayHello();

console.log("==========");

function calc(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return false;
  }
}

const calc2 = calc;
console.log(calc2(100, "+", 300));
