// async function func1() {
//   return "hello";
// }

// func1().then(console.log);

// function func2() {
//   return new Promise((resolve) => {
//     resolve("hello");
//   });
// }

// func2().then(console.log);

const DB = [];

function save(user) {
  const oldDBLength = DB.length;
  DB.push(user);
  if (oldDBLength < DB.length) {
    return Promise.resolve(user);
  } else {
    return Promise.reject(error);
  }
}

function sendEmail(user) {
  console.log(`Email sent to ${user.email}`);
  return Promise.resolve(user);
}

function getResult(user) {
  console.log(`User ${user.name} registered`);
  return Promise.resolve(user);
}

async function register(user) {
  try {
    const savedUser = await save(user);
    const emailedUser = await sendEmail(savedUser);
    const result = await getResult(emailedUser);
    return result;
  } catch (error) {
    return new Error(error.message);
  }
}

const user = { name: "빈영", email: "bpcdpc@hanmail.net" };
register(user).then(console.log);
