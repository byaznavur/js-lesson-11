function add(a, b) {
  if (typeof a !== "number") {
    throw "a must be a number !";
  }
  if (typeof b !== "number") {
    throw "b must be a number !";
  }
  return a + b;
}

// let result = add(10, "20");
// console.log(result);

try {
  let result = add(10, "20");
  console.log(result);
} catch (err) {
  console.log("Error:", err);
} finally {
  console.log("Finally");
}

console.log("Bye");
