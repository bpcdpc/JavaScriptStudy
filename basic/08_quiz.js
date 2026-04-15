// 함수 정의 실습
// 구구단의 단을 매개변수로 전달받아
// 출력하는 함수를 정의하고 호출하시오.

function timeTables(dan) {
  console.log(`====${dan}단====`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
}

timeTables(3);

console.log("==========");

// 함수 정의 실습
// 점수(score)를 매개 변수로 전달받아
// 학점(A,B~F)을 반환하는 함수를 정의하고 여러번 호출하시오.

function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

for (let i = 1; i <= 10; i++) {
  const score = Math.floor(Math.random() * 101);
  const myGrade = grade(score);
  console.log(`student${i} : ${myGrade}`);
}

console.log("==========");

// 함수 정의 실습
// 두 수와 연산자(string형)를 입력받아서
// 사칙연산 후 결과를 반환하는 calc함수를 만드시오.
// 단 예외 사항은 고려하지 않는다.

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

console.log(calc(10, "/", 3));
console.log(calc(100, "-", 3));
console.log(calc(1000, "*", 3));
console.log(calc(10000, "+", 3));
