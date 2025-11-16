const firstname = "rajat";
const lastname = "sharma";

console.log(`Fistname is ${firstname} and Lastname is ${lastname}`); // Fistname is rajat and Lastname is sharma

const gamename = "cricket";
console.log(gamename.charAt(0));
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.charAt(4));
console.log(gamename.indexOf("r"));
console.log(gamename.toUpperCase());

const newString = gamename.substring(0, 3);
console.log(newString); // cri
console.log(gamename.substring(3, 6)); // cke

const anotherString = gamename.slice(-8, 4);
console.log(anotherString);

const newString1 = " Rajat Bhopte ";
console.log(newString1); // 14
console.log(newString1.trim()); // Rajat   Bhopte

const url = "https://rajat.com/rajat%20bhopte";

console.log(url.replace("%20", "-"));
console.log(url.includes("rajet")); // false

console.log(url.split("r"));
console.log(gamename.split("")); // convert whole string into array

// console.log(gamename.join("")); // convert array into string
console.log(gamename.split("").reverse().join("")); // convert whole string into array and then join with -

function reversestring() {
  console.log(gamename.split("").reverse().join("")); // convert whole string into array and then join with -
} // function declaration

reversestring(); // function calling

function countVowel() {
  const Vowel = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < gamename.length; i++) {
    if (Vowel.includes(gamename[i])) {
      count++;
    }
  }
  return count;
}

function CapitalFirstLetter() {
  const words = gamename.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

function isPalindrome() {
  const str = gamename.toLowerCase;
  const reversedStr = str.split("").reverse().join("");
  return str == reversedStr
}
console.log(countVowel()); // 2
console.log(CapitalFirstLetter()); // Cricket
console.log(isPalindrome()); // false
