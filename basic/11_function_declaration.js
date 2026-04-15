// 함수 선언문
function add1(a, b) {
  return a + b;
}
console.log(add1(100, 4));

// 함수 표현식
const add2 = function (a, b) {
  return a + b;
};
console.log(add2(100, 4));

// 화살표 함수
const add3 = (a, b) => {
  return a + b;
};
console.log(add3(100, 4));
