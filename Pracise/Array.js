// we are learning array in js
// syntax for array
let fruits = ["mangoes", "banana", "oranges", "grapes"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// this for of loop similar to for each loop in c++/ java

for (let fruit of fruits) {
  console.log(fruit);
}

// if you want to add element at end of array
fruits.push("Kiwi");
fruits.push("Watermelon");
fruits.pop();
console.log("After adding items");
for (let fruit of fruits) {
  console.log(fruit);
}

console.log(fruits.indexOf("Kiwi"));

let number = [1, 2, 3, 4, 5, 6];
//slice does not change the original array;

console.log(number.slice(0, 2));

console.log(number.reverse());
