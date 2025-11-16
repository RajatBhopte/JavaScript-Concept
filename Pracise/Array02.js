// // we are learning about array
// let number = [1, 2, 3, 4, 5];

// //  let use map method , which operate on  each element of array ;
// // it does not affect the original value of array

// let num = number.map((n) => n * 2); // multiply each element with 2

// console.log(num);

// /* array.filer() method only create a new array which pass the condition*/
// console.log(number.filter((n) => n % 2 == 0)); // return only even number

// console.log(number);
// let sum = number.reduce((sum, curr) => sum + curr, 0);
// console.log(sum);
// console.log(
//   number.reduce((prod, curr) => {
//     return prod * curr;
//   }, 1)
// );

// let maxelement = number.reduce((max, curr) => {
//   return curr < max ? curr : max;
// }, number[0]);
// console.log(maxelement);

// practice question

// let prices = [100, 200, 150];

// // Add a 10% tax to each price and find the total bill using reduce

// let ans = prices.map(price => price *= 1.1);
// console.log(ans.reduce((sum, curr) => sum + curr, 0));

// let names = ["rajat" , "shruti" , "pankaj"];
// console.log(names.map(name => name.toUpperCase()))

// let number = [1, 2, 3, 4, 5, 6];
// // we have to double the odd number only

// let ans = number.filter((num) => num % 2 == 1).map((n) => n * 2);
// console.log(ans);

let users = [
  { name: "Rajat", age: 22 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 19 },
];

let result = users.filter((user) => user.age > 18).map((user) => user.name);
console.log(result);


