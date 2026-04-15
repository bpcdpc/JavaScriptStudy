// 클래스 정의 실습
// • 운송수단을 의미하는 Vehicle 클래스를 정의하라.
// • 속도를 관리하는 speed라는 속성을 정의하라.
// • speed를 10 증가하는 메쏘드를 정의하라.
// • speed를 10 감소하는 메쏘드를 정의하라.
// • 현재속도를 표시하는 info 메쏘드를 정의하라.

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

const someVehicle = new Vehicle(100);

someVehicle.info();

someVehicle.speedUp();
someVehicle.speedUp();
someVehicle.speedUp();

someVehicle.info();

someVehicle.speedDown();
someVehicle.speedDown();

someVehicle.info();

// 클래스 상속 실습
// • Car class를 상속받아서 Truck class를 정의하라.
// • 적재량을 관리하는 loadage 정수형 변수를 정의하고 초기값 0으로 설정
// • ‘load’를 화면에 인쇄하는 load 메쏘드를 정의하라.
// • ‘unLoad’를 화면에 인쇄하는 unLoad 메쏘드를 정의하라.

class Car extends Vehicle {
  constructor(speed, wheels, seats) {
    super(speed);
    if (!wheels) this.wheels = wheels;
    if (!seats) this.seats = seats;
    this.wheels = wheels;
    this.seats = seats;
  }
  drive() {
    console.log(`You are driving by ${this.speed}km/h.`);
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

console.log("==========");

// 클래스 상속 실습
// • Car class를 상속받아서 Truck class를 정의하라.
// • 적재량을 관리하는 loadage 정수형 변수를 정의하고 초기값 0으로 설정
// • ‘load’를 화면에 인쇄하는 load 메쏘드를 정의하라.
// • ‘unLoad’를 화면에 인쇄하는 unLoad 메쏘드를 정의하라.

class Truck extends Car {
  constructor(speed, wheels, seats, loadage) {
    super(speed, wheels, seats);
    if (!loadage) this.loadage = 0;
    this.loadage = loadage;
  }
  load() {
    console.log(`You are loading ${this.loadage}kg.`);
  }
  unLoad() {
    this.loadage = 0;
    console.log(`Unloaded.`);
  }
}

const truck = new Truck(80, 12, 3, 12000);

console.log(truck);
truck.info();
truck.drive();
truck.load();
truck.unLoad();
