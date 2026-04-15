// 구구단 출력
// 구구단을 이중 for루프를 이용해서 출력하시오.

for (let i = 2; i <= 9; i++) {
  console.log(`====${i}단====`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

console.log("==========");

// 홀수 출력
// for루프, continue, %(나머지 연산자)를 이용해서
// 0~10 사이의 홀수를 출력하라.

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
