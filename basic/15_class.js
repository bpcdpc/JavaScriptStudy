class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const user = new Person("bpcdpc", 46);
console.log(user.name, user.age);
user.greet();

console.log("==========");

class NewPerson {
  #id;
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }
  getId() {
    console.log(`ID는 ${this.#id} 입니다.`);
  }
}

const newUser = new NewPerson("병선", 48, "19987534");
newUser.getId();
// console.log(newUser.#id);

console.log("==========");

class Vehicle {
  constructor(speed) {
    if (!speed) this.speed = 100;
    this.speed = speed;
  }
  speedUp() {
    this.speed += 10;
  }
  speedDown() {
    this.speed -= 10;
  }
  info() {
    console.log(`Current speed: ${this.speed}`);
  }
}

class Car extends Vehicle {
  constructor(speed, wheels, seats) {
    super(speed);
    if (!wheels) this.wheels = 4;
    if (!seats) this.seats = 5;
    this.wheels = wheels;
    this.seats = seats;
  }
  drive() {
    console.log(`You are driving by ${this.speed} km/h.`);
  }
}

const car = new Car(100, 4, 5);

console.log(car.speed);
car.info();
car.drive();

car.speedUp();
car.speedUp();
car.speedUp();

console.log(car.speed);
car.info();
car.drive();

car.speedDown();
car.speedDown();

console.log(car.speed);
car.info();
car.drive();
