const DB = [];

function saveToDB(user) {
  const oldDBLength = DB.length;
  DB.push(user);
  console.log(`User ${user.name} added to a database.`);
  return new Promise((resolve, reject) => {
    if (oldDBLength < DB.length) {
      resolve(user);
    } else {
      reject(new Error(`User ${user.name} save failed.`));
    }
  });
}

function sendEmail(user) {
  console.log(`Email sent to ${user.email}.`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  console.log(`User ${user.name} registered.`);
  return new Promise((resolve) => {
    console.log(`User ${user.name} registered successfully.`);
  });
}

function register(user) {
  return saveToDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error));
}

const user = { name: "빈영", email: "bpcdpc@hanmail.net" };

const result = register(user);
result.then(console.log);
