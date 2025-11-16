// Clousure in javascript is like function
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log("Count is: " + count);
  };
}

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;

      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

let mycount = counter();
mycount.increment(); // 1
mycount.increment(); // 1
mycount.decrement(); // 0
