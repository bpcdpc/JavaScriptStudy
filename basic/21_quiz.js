// 로또 발생기

// 난수 발생
function drawNumber() {
  return Math.floor(Math.random() * 45) + 1;
}

// Array
function genArray() {
  const arr = new Array();
  while (arr.length < 6) {
    const n = drawNumber();
    if (!arr.includes(n)) {
      arr.push(n);
    }
  }
  return arr.sort((a, b) => a - b);
}

console.log("Array: ", genArray());

// Set
function genSet() {
  const set = new Set();
  while (set.size < 6) {
    const n = drawNumber();
    set.add(n);
  }
  return [...set].sort((a, b) => a - b);
}

console.log("Set: ", genSet());
