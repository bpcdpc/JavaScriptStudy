function logSet(set) {
  console.log(set.size, set);
}

set = new Set();
logSet(set);

set.add(2);
logSet(set);

set.add(6);
logSet(set);

set.add(6);
logSet(set);

set.add(1);
logSet(set);

console.log("==========");

console.log(set.has(3));
console.log(set.has(6));

// set.delete(6);
// logSet(set);

// set.clear();
// logSet(set);

console.log("==========");

set.forEach((item) => {
  console.log(item);
});
for (const value of set.values()) {
  console.log(value);
}
