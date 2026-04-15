// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

// console.log("==========");

// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// function asyncTest(name, callback) {
//   console.log("타이머 시작");
//   setTimeout(() => callback(name), 3000);
// }

// function doOtherThing() {
//   for (let i = 1; i <= 4; i++) console.log(`executed ${i} time(s)`);
// }

// asyncTest("빈영", sayHello);
// doOtherThing();

// console.log("==========");

// // Callback Hell

// const DB = [];

// function saveToDB(user, callback) {
//   DB.push(user);
//   console.log(`User ${user.name} saved to a database.`);
//   return callback(user);
// }

// function sendEmail(user, callback) {
//   console.log(`Email sent to ${user.email}.`);
//   return callback(user);
// }

// function getResult(user) {
//   return `User ${user.name} registered successfully.`;
// }

// function register(user) {
//   return saveToDB(user, (user) => sendEmail(user, (user) => getResult(user)));
// }

// const user = { name: "빈영", email: "bpcdpc@hanmail.net" };
// const result = register(user);
// console.log(result);

// console.log("==========");

// Promise

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Success!!");
  } else {
    reject("Fail!!");
  }
});

promise
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.log(`Error: ${error}`));

// 콜백으로 넘겨줄 함수를 아래처럼 함수의 이름만 전달하는 것도 가능
// promise.then(console.log).catch(console.log);

console.log("==========");

const p = new Promise((resolve) => {
  resolve(10);
  console.log("1. Promise executed");
});

console.log("2. Code keep running");

p.then((n) => console.log(`3. then executed: ${n}`));

console.log("==========");

const p1 = new Promise((resolve) => {
  const result = 10;
  resolve(result);
});

const p2 = p1.then((n) => n + 1);
p2.then(console.log);

p1.then((n) => n + 1).then(console.log);

console.log("==========");

const newPromise = new Promise((resolve) => {
  resolve(10);
});
Promise.resolve(10);

function getData() {
  return Promise.resolve("Data");
}

getData().then(console.log);

Promise.resolve(100)
  .then((n) => n + 1)
  .then(console.log);

console.log("==========");

Promise.reject("Fail").catch(console.log);

function checkAge(age) {
  if (age > 18) {
    return Promise.resolve("Adult");
  } else {
    return Promise.reject("Kid");
  }
}

checkAge(46).then(console.log).catch(console.log);
