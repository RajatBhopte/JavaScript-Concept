// console.log("Number form 1 to 100 ");
// let output = "";
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;

//   output += i + " ";
// }
// console.log(output);
// console.log(sum);

// // print rigth angle triangle
// let row = 4;
// let count = 1;

// for (let i = 1; i <= row; i++) {
//   let output = "";

//   for (let space = 1; space <= row - i; space++) {
//     output += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     output += "*" + "";
//   }
//   console.log(output);
// }

let nums = [1, 2, 3, 4, 5, 6];
let left = 0,
  right = nums.length - 1;
let ans;
let target = 3;

while (left <= right) {
  let mid = (left + right) >> 1;

  if (nums[mid] == target){
    ans = mid;
    break;
  }
  else if (nums[mid] > target) right = mid - 1;
  else left = mid + 1;
}

console.log(ans);
