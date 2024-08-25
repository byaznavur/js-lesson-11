"use strict";

// console.log(this);

// console.log(window);

// console.log(this === window);

// console.log(global);

// console.log(this == global);

// function func() {
//   console.log(this);
// }

// func();

let person = {
  firstName: "John",
  lastName: "Doe",
  fullName(start, end) {
    return start + " " + this.firstName + " " + this.lastName + " " + end;
  },
};

let student = {
  firstName: "Shukurjon",
  lastName: "Abduvahobov",
};

console.log(person.fullName.bind(student, "Hello", "!")());
console.log(person.fullName.call(student, "Hello", "!"));
console.log(person.fullName.apply(student, ["Hello", "!"]));
