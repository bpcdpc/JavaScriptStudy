try {
  console.log(a);
} catch (error) {
  console.log(`[Error] ${error}`);
} finally {
  console.log("Do this all the time.");
}

try {
  throw new Error("문제 발생");
} catch (error) {
  console.log(`[Error] ${error}`);
}

function checkAge(age) {
  if (age < 18) {
    throw new Error("미성년자");
  }
  return "통과";
}

try {
  checkAge(12);
} catch (error) {
  console.log(`[Error] ${error}`);
}
