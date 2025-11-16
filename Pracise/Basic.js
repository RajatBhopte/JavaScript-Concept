// // we learn basic of javascript
// let marks = 80;
// if(marks < 80){
//     console.log("You get B grade");
// }
// else if(marks > 80 && marks < 90){
//     console.log("You get A grade");

// }
// else{
//     console.log("You Get A+ Grade");
// }
let row = 5;
let output;
for (let i = row; i >= 1; i--) {
  output = "";

  for (let space = row; space > i; space--) {
    output += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    output += "*";
  }
  console.log(output);
}

let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}
