const arr1 = [1, 2, 3];
console.log(...arr1);

const person = { name: "빈영", age: 46 };
console.log({ ...person });

const user = { name: "병선", age: 48 };
const newUser = { ...user, age: 38 };
console.log(newUser);

console.log("==========");

function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5);

function sum1(n1, n2, ...nums) {
  console.log(n1);
  console.log(n2);
  console.log(nums);
}

sum1(1, 2, 3, 4, 5);
