// 회원 가입
// 1. 디비에 저장
// 2. 이메일 발송
// 3. 사용자에게 알림

// Promise
const DB = [];

function save(user) {
  const oldDBLength = DB.length;
  //DB.push(user);
  return new Promise((resolve, reject) => {
    if (oldDBLength < DB.length) {
      console.log(`User ${user.name} saved.`);
      resolve(user);
    } else {
      reject(`User ${user.name} save failed.`);
    }
  });
}

function sendEmail(user) {
  return new Promise((resolve) => {
    console.log(`An email sent to ${user.email}`);
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    console.log(`User ${user.name} registered succeessfully.`);
    resolve("result: success");
  });
}

function register(user) {
  return save(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error));
}

const user = { name: "빈영", email: "bpcdpc@hanmail.net" };
const result = register(user);
result.then(console.log);
