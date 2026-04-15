// Quiz-Array 활용
// list array의 item 중에 bts 멤버만 골라 배열을 만들고 하나의 문자열로 만들어서 출력하시오.

const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];

const newList = [];
for (const name of list) {
  if (bts.includes(name)) {
    newList.push(name);
  }
}
console.log(newList.join("\n"));

console.log("==========");

const filtered = list.filter((name) => bts.includes(name)).join("\n");
console.log(filtered);

console.log("==========");

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = oneToTen
  .filter((n) => n % 3 === 0)
  .map((n) => n * 2)
  .reduce((a, b) => a + b, 0);

console.log(result);
