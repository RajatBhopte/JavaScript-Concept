// we are learning function in javascript

// syntax
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
let output = "";

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    output += i + " ";
  }
}
// console.log(output);

function Reversestring(str) {
  let reversestr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversestr += str[i];
  }

  return reversestr;
}

// console.log(Reversestring("Rajat"));

function isPanlindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// console.log(isPanlindrome("abc"));

let name = "rajat";
console.log(name.split("").sort());
