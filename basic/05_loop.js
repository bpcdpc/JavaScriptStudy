for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("==========");

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

console.log("==========");

let age = 0;
let num = 0;
while (age < 5) {
  while (num < 10) {
    console.log(num, `나는 ${age}살 입니다.`);
    num += 1;
  }
  num = 0;
  age += 1;
}

console.log("==========");

num = 0;
do {
  num = num + 1;
  console.log(num);
} while (num < 10);

console.log("==========");

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }
  console.log(`${i} was executed!`);
}

console.log("==========");

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    break;
  }
  console.log(`${i} was excuted!`);
}

console.log("==========");

age = 0;
while (age < 5) {
  age += 1;
  if (age === 2) {
    continue;
  }
  console.log(`나는 ${age}살 입니다.`);
}

console.log("==========");

age = 0;
while (age < 5) {
  age += 1;
  if (age === 2) {
    break;
  }
  console.log(`나는 ${age}살 입니다.`);
}
