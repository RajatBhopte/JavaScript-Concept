function expanaroundcenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
let str = "madamee";

let start = 0;
let end = 0;

for (let i = 0; i < str.length; i++) {
  let len1 = expanaroundcenter(str, i, i);
  let len2 = expanaroundcenter(str, i, i + 1);

  let len = Math.max(len1, len2);

  if (len > end - start) {
    start = Math.floor(i - (len - 1) / 2);

    end = Math.floor(i + len / 2);
  }
}

console.log(str.substring(start, end + 1));
