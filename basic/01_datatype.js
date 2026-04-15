const integer = 123;
console.log(integer, typeof integer);
const negative = -123;
console.log(negative, typeof negative);
const double = 1.23;
console.log(double, typeof double);

const binary = 0b10101010;
console.log(binary, typeof binary);
const octal = 0o157;
console.log(octal, typeof octal);
const hex = 0x7a3f;
console.log(hex, typeof hex);

const inf = 1 / 0;
console.log(inf, typeof inf);
const minf = -1 / 0;
console.log(minf, typeof minf);

const nan = 1 / "hello";
console.log(nan, typeof nan);

const undefinedVar = undefined;
console.log(undefinedVar, typeof undefinedVar);

let greetings = "안녕하세요";
greetings = "'안녕하세요'";
console.log(greetings);

const userName = "BTS";
greetings = `안녕하세요, ${userName}!`;
console.log(greetings);

const isFree = true;
const isActivated = false;
const isOn = true;
console.log(isFree, isActivated, isOn);
