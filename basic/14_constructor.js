function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello. My name is ${this.name}, and my age is ${this.age}.`);
  };
}

const user1 = new Person("Ben", 16);
const user2 = new Person("Grace", 42);

console.log(user1);
console.log(user2);

console.log(user1.name, user1.age);
user2.greet();

console.log("==========");

function Student(name, age, dept, id) {
  this.name = name;
  this.age = age;
  this.dept = dept;
  this.id = id;
  this.enroll = function () {
    console.log(`${this.name}(${id})님 수강신청을 하십시오.`);
  };
  this.records = function () {
    console.log(`${this.name}(${id})님의 성적은 A입니다.`);
  };
}

const std1 = new Student("빈영", "46", "Computer Science", "20000320");
const std2 = new Student("병선", "48", "Radiology", "19987534");

console.log(std1);
console.log(std2);

console.log(std1.name, std1.age);
console.log(std2.name, std2.age);

std1.enroll();
std2.records();
