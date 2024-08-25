/* Global {
  record: { inner: undefined, count: 0 },
  pointer: null
} */

let count = 0;

function outer() {
  /* Outer {
    record: { outerParameter: 10 },
    pointer: Global
  } */
  let outerParameter = 10;
  return function inner(innerParameter) {
    /* Inner {
      record: { res: undefined }
      pointer: Outer
    } */
    let res = outerParameter + innerParameter;
    return res;
  };
}

let inner = outer();

// let inner = function inner(innerParameter) {
//   return outerParameter + innerParameter;
// };

console.log(inner(5));
