function sayHello(name) {
  console.log(`Heollo, ${name}!`);
}

function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

function greet(name, callback) {
  // console.log(name);
  callback(name);
}

greet("친구", sayHi);
greet("선생님", sayHello);
