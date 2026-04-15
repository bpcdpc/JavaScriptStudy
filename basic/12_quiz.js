// Calback 실습
// calc2 함수를 호출할때 함수 표현식과 화살표 함수를 사용해서 호출하시오.

// const calc = function (a, b, fn) {
//   return fn(a, b);
// };

// const plus = calc(100, 4, (n1, n2) => n1 + n2);
// const minus = calc(100, 4, (n1, n2) => n1 - n2);
// const multiply = calc(100, 4, (n1, n2) => n1 * n2);
// const divide = calc(100, 4, (n1, n2) => n1 / n2);
// const square = calc(100, 4, (n1, n2) => n1 ** n2);

function calc(a, b, fn) {
  return fn(a, b);
}

const plusFn = function (a, b) {
  return a + b;
};

const minusFn = function (a, b) {
  return a - b;
};

const plus = calc(100, 4, plusFn);
const minus = calc(100, 4, minusFn);
const multiply = calc(100, 4, (a, b) => {
  return a * b;
});
const divide = calc(100, 4, (a, b) => a / b);
const square = calc(100, 4, function (a, b) {
  return a ** b;
});

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(square);
