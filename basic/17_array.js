console.log("========== 배열의 선언 ==========");

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

let array = new Array(2);
console.log(array);
console.log(array[0]);
console.log(array[1]);

array = new Array(1, 2, 3, 4, 5);
console.log(array);

console.log("========== 배열의 값 변경, 추가, 삭제 ==========");

console.log(numbers.length, numbers);

numbers[3] = -4;
numbers[5] = 6;
console.log(numbers.length, numbers);

numbers[8] = 7;
console.log(numbers.length, numbers);

delete numbers[1];
console.log(numbers.length, numbers);

delete numbers[numbers.length - 1];
console.log(numbers.length, numbers);

console.log("========== indexOf, includes ==========");

const bts1 = ["진", "슈가", "제이홉", "RM"];
console.log(bts1);

const bts2 = new Array("지민", "뷔", "정국");
console.log(bts2);
console.log(bts1.indexOf("슈가"));
console.log(bts2.indexOf("슈가"));
console.log(Boolean(bts2.indexOf("슈가")));

console.log(bts1.includes("RM"));
console.log(bts2.includes("RM"));

console.log("========== push, pop, shift, unshift ==========");

bts1.push("me");
console.log(bts1.length, bts1);

bts1.unshift("you");
console.log(bts1.length, bts1);

const first = bts1.shift();
console.log(bts1.length, bts1);
console.log(first);

const last = bts1.pop();
console.log(bts1.length, bts1);
console.log(last);

console.log("========== splice, slice ==========");

const deleted = bts1.splice(0, 1);
console.log(bts1.length, bts1);
console.log(deleted.length, deleted);

bts1.splice(0, 0, "He", "She");
console.log(bts1.length, bts1);

let bts3 = bts1.slice(0, 2);
console.log(bts3.length, bts3);
console.log(bts1.length, bts1);

bts3 = bts1.slice(-1);
console.log(bts3.length, bts3);

bts3 = bts1.slice(-3);
console.log(bts3.length, bts3);

console.log("========== concat, reverse, join ==========");

const bts = bts1.concat(bts2);
console.log(bts.length, bts);

const rbts = bts.reverse();
console.log(bts.length, bts);

const members = bts.join(", ");
console.log(members);

console.log("========== sort ==========");

const fruits = ["Banana", "Mango", "Apple", "Orange"];
fruits.sort();
console.log(fruits);

numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const items = [
  { name: "Apple", price: 50 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 30 },
];

items.sort((a, b) => a.price - b.price);
console.log(items);

items.sort((a, b) => b.price - a.price);
console.log(items);

items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);

items.sort((a, b) => b.name.localeCompare(a.name));
console.log(items);

console.log("========== Iteration ==========");

for (let i = 0; i < bts.length; i++) {
  console.log(i, " : ", bts[i]);
}

for (member of bts) {
  console.log(member);
}

bts.forEach((member, index, array) => {
  console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${member}입니다.`);
});

console.log("==========");

const oneToFive = [1, 2, 3, 4, 5];
const doubled = oneToFive.map((num) => num * 2);
console.log(doubled);

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = oneToTen.filter((item) => item % 2 !== 0);
console.log(odd);

const even = oneToTen.filter((item) => item % 2 === 0);
console.log(even);

const tripled = oneToTen.filter((item) => item % 3 === 0);
console.log(tripled);

const sum = oneToTen.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  100,
);
console.log(sum);
