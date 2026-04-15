console.log("abs", Math.abs(-10));

console.log("ceil", Math.ceil(1.4));
console.log("ceil", Math.ceil(-1.4));

console.log("floor", Math.floor(1.4));
console.log("floor", Math.floor(-1.4));

console.log("round", Math.round(1.49));
console.log("round", Math.round(1.5));

console.log("trunc", Math.trunc(1.56456));
console.log("random", Math.random());

console.log("==========");

for (let i = 0; i < 10; i++) {
  console.log(Math.random() * 10);
}

console.log("==========");

for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 10) + 1);
}
