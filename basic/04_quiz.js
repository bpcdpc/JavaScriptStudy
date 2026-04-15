// 학점 구하기
// 주어진 score에 따라서 학점(A,B~F)을 출력하는 코드를 조건문을 이용해서 작성

const score = 95;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`당신의 학점은 ${grade} 입니다.`);

console.log("==========");

// 요일 출력하기
// 변수 day는 요일을 나타내는 숫자(0:일~6:토)를 가진다.
// day값에 따라 요일을 출력하는 프로그램을 작성하시오.

const day = 2;
let dayOfWeek;

switch (day) {
  case 0:
    dayOfWeek = "일";
    break;
  case 1:
    dayOfWeek = "월";
    break;
  case 2:
    dayOfWeek = "화";
    break;
  case 3:
    dayOfWeek = "수";
    break;
  case 4:
    dayOfWeek = "목";
    break;
  case 5:
    dayOfWeek = "금";
    break;
  case 6:
    dayOfWeek = "토";
    break;
  default:
    dayOfWeek = "잘못된 ";
}

console.log(`오늘은 ${dayOfWeek}요일 입니다.`);
