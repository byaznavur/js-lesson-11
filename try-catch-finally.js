// let loading = true;

// try {
//   // let str = "abc";
//   let str = 12.545431;
//   console.log(str.toFixed(3));
// } catch (err) {
//   // console.log("Error", err);
//   console.log("Error type:", err.name);
//   console.log("Error message:", err.message);
// } finally {
//   loading = false;
//   console.log("Finally");
// }

// let result = add(10, 20);
// console.log(result);

try {
  let result = add(10, 20);
  console.log(result);
} catch (err) {
  console.log({ name: err.name, message: err.message });
} finally {
  console.log("Work");
}

console.log("Bye");
