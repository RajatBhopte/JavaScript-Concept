let promise = new Promise(function (resolve, reject) {
  let success = false;

  if (success) {
    resolve("Task is completed");
  } else {
    reject("Task is not completed:");
  }
});

promise
  .then(function (result) {
    console.log("Resolved with:", result);
  })
  .catch(function (error) {
    console.log("Rejected with:", error);
  });

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

// myPromise.then((data) => console.log(data));

import { add } from "./MathOperations.js";

console.log(add(5, 6));

import multiply from "./MathOperations.js";


console.log(multiply(3, 4));
