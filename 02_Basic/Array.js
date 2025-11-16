// To Study About Array in JavaScript

const myarr = [0, 1, 2, 3, 4, 5];

myarr.push(6);
myarr.push(7);

myarr.unshift(0); //  The 0 get push in  the start of the array

console.log(myarr);
console.log(myarr.indexOf(9));
console.log(myarr.includes(3));

const newArr = myarr.join();
console.log(newArr);

// slice and splice

console.log("A ", myarr);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let double = nums.map((n) => n * 2);

// nums.forEach((n) => {
//   console.log(n*2);
// })


let newArr1 = nums.concat(myarr)
console.log(newArr1);
