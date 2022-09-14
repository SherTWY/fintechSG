let first_name = "Sherrich"
let last_name = "Tang"

let full_name = first_name + last_name

console.log(full_name)

// let first_name = "Jon";
// let last_name = "Scheele";

// let full_name = first_name + last_name;
// // full_name = "DixantMittal"

// console.log(`Hello there! ${full_name}`);
// console.log("Hello there! ${full_name}");

// let income = 100000;
// if (income < 20000) {
//   console.log("No tax");
// } else if (income < 40000) {
//   console.log("Tax is 5%");
// } else {
//   console.log("Tax is 10%");
// }

// let names = ["Dixant", "Jon", "Reave", "Justin", "Jeremy"];
// console.log(`First element: ${names[0]}`);
// console.log(`Second element: ${names[1]}`);
// console.log(`Third element: ${names[2]}`);

// for (i = 0; i < 5; i++) {
//   console.log(`${i}th name: ${names[i]}`);
// }

// function cool_math_function(a, b) {
//   return (a + b) ** 2;
// }

// let num1 = 412;
// let num2 = 432;

// console.log(cool_math_function(num1, num2));
// console.log(cool_math_function(2, 3));
// console.log("Hello");

// // normal way
// function sum(a, b) {
//   return a + b;
// }

// // anonymous function
// let anon_sum = function (a, b) {
//   return a + b;
// };

// // arrow function
// let arrow_sum = (a, b) => {
//   return a + b;
// };

// let info = {
//   first_name: "Dixant",
//   last_name: "Mittal",
// };

// console.log(info.first_name);
// console.log(info.last_name);

// Callback functions
let var1 = "Dixant";
let var2 = (a, b) => {
  return a + b;
};

function my_cool_function(a, b, ops) {
  let result = ops(a, b);
  console.log("Result from the operation: " + result);
}

my_cool_function(1, 3, (x, y) => {
  return x + y;
});

my_cool_function(3, 4, (x, y) => {
  return (x ** 2 + y ** 2) ** 0.5;
});

my_cool_function(3, 4, (x, y) => {
  return x - y;
});
