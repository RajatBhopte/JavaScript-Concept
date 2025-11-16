let name = "Rajat Bhopte";

let reversename = name
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(reversename);\






let num = 12345;
let reversenumber = Number(num.toString().split("").reverse().join(""));

console.log(typeof reversenumber);
