// Print the Square of only the even number in array

let number = [1, 2, 3, 4, 5, 6];
let square = number.filter((n) => n % 2 == 0).map((n) => n * n);
console.log(square);
let tasks = [];

// Task Management System

function addTask(task) {
  tasks.push(task);
}

function deleteTask(index) {
  tasks.splice(index, 1);
}

function showTasks() {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}
