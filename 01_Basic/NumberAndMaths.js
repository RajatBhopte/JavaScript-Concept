// to Study about Number and Maths in javascript
const score = 100;
const bonus = 50;
const balance = new Number(1000);
const str = new String(balance);
console.log(balance.toFixed(1));

// console.log(str); // 1000

const hunder = 1000000;
console.log(hunder.toLocaleString("en-IN")); // 10,00,000

const x = Number.MAX_VALUE; //  // 1.7976931348623157e+308

//+++++++++++++++++++++++++++++++++

// maths library come by default with js

// console.log(Math);

// const max = Math.max(16, 12, 3);
// console.log(max);

console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1)



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+min);
