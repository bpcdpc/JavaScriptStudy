// Promise 회원 가입

const DB = [];

function save(user) {
  const oldDBLength = DB.length;
  DB.push(user);
  if (oldDBLength < DB.length) {
    console.log(`User ${user.name} saved.`);
    return Promise.resolve(user);
  } else {
    return Promise.reject(new Error("Save failed."));
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

function register(user) {
  return save(user).then(sendEmail).then(getResult).catch(console.log);
}

const user = { name: "빈영", email: "bpcdpc@hanmail.net" };
register(user);
