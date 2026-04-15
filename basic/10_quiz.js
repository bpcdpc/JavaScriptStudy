// 함수 정의 실습
// 사칙연산을 담당하는 각각의 함수를 정의하고
// 정의된 함수들을 매개변수로 전달받아서
// 처리하는 calc2 함수를 정의하고 호출하시오.

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calc(a, op, b) {
  return op(a, b);
}

console.log(calc(100, plus, 4));
console.log(calc(100, minus, 4));
console.log(calc(100, multiply, 4));
console.log(calc(100, divide, 4));
