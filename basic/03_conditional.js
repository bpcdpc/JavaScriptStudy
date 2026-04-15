const adult = 19;
const age = 46;
const gender = "female";

if (age >= adult) {
  if (gender == "male") {
    console.log("나는 성인 남성입니다.");
  } else {
    console.log("나는 성인 여성입니다.");
  }
} else {
  if (gender == "male") {
    console.log("나는 미성년 남성입니다.");
  } else {
    console.loog("나는 미성년 여성입니다.");
  }
}

console.log("==========");

const isLoggedIn = true;
const token = 0;

if (isLoggedIn && token) {
  console.log("로그인된 상태입니다.");
} else if (isLoggedIn && !token) {
  console.log("발행된 토큰이 없습니다.");
} else {
  console.log("로그인이 필요합니다.");
}

console.log("==========");

const isMember = true;

if (age <= 18 || isMember) {
  console.log("할인 대상입니다.");
} else {
  console.log("할인 대상이 아닙니다.");
}

console.log("==========");

const browser = "브레이브";
let browserName;

if (browser == "엣지") {
  browserName = "Edge";
} else if (browser == "사파리") {
  browserName = "Safari";
} else if (browser == "파이어폭스") {
  browserName = "Firefox";
} else if (browser == "오페라") {
  browserName = "Opera";
} else if (browser == "크롬") {
  browserName = "Chrome";
} else {
  browserName = "Unknown";
}

console.log(`This browser is ${browserName}.`);

console.log("==========");

let menu = 3;
switch (menu) {
  case 1:
    console.log("Americano");
    break;
  case 2:
    console.log("Caffe Latte");
    break;
  case 3:
    console.log("Cappuccino");
    break;
  default:
    console.log("Select a menu.");
}

console.log("==========");

switch (browser) {
  case "엣지":
    browserName = "Edge";
    break;
  case "사파리":
    browserName = "Safari";
    break;
  case "파이어폭스":
    browserName = "FireFox";
    break;
  case "오페라":
    browserName = "Opera";
    break;
  case "크롬":
    browserName = "Chrome";
    break;
  default:
    browserName = "Unknown";
}

console.log(`This browser is ${browserName}.`);

console.log("==========");

console.log(`true is ${Boolean(true)}`); // T
console.log(`false is ${!!false}`); // F
console.log(`0 is ${Boolean(0)}`); // F
console.log(`-0 is ${Boolean(-0)}`); // F
console.log(`1 is ${Boolean(1)}`); // T
console.log(`-1 is ${Boolean(-1)}`); // T
console.log(`'' is ${Boolean("")}`); // F
console.log(`'0' is ${Boolean("0")}`); // T
console.log(`'false' is ${Boolean("false")}`); // T
console.log(`null is ${Boolean(null)}`); // F
console.log(`undefined is ${Boolean(undefined)}`); // F
console.log(`NaN is ${Boolean(NaN)}`); // F
console.log(`[] is ${Boolean([])}`); // F *********** T
console.log(`{} is ${Boolean({})}`); // F *********** T
console.log(`Infinity is ${Boolean(Infinity)}`); // T
console.log(`-Infinity is ${Boolean(-Infinity)}`); // T
