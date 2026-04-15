const user = {
  name: "빈영",
  age: 46,
};

// destructuring
const { name, age } = user;
console.log(name, age);

// alias
const { name: userName, age: userAge } = user;
console.log(userName, userAge);

// parameters
function userInfo(user) {
  console.log(`${user.name} - ${user.age}`);
}
userInfo(user);

function printUser({ name, age }) {
  console.log(`${name} - ${age}`);
}
printUser(user);
