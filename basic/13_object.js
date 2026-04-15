const human = {
  name: "Ben",
  age: 30,
};

human.age = 20;
human["name"] = "Grace";

console.log(human.name, human["age"]);

human.job = "teacher";
console.log(human.job);

human.info = function () {
  console.log(`My name is ${this.name}, and my job is a ${this.job}.`);
};
human.info();

delete human.age;
console.log(human.age);

console.log("==========");

const eridian = {
  name: "Rocky",
  age: 1000008,
  greet: function () {
    console.log(`Hello, This is ${this.name} from erid!`);
  },
  goodbye(time) {
    console.log(`It's already ${time}. Bye~`);
  },
};

eridian.greet();
eridian.goodbye(new Date());
