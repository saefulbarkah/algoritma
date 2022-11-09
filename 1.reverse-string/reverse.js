console.clear();
const str = "NEGIE1";
function reverseString(str) {
  let i = 0;
  let j = str.length - 2; // NEGIE [N,E,G,I,E] = 4 length
  let strchar = str.split(""); // split string to array

  // loop when conditional is true
  while (i < j) {
    let tempChar = strchar[i];
    strchar[i] = strchar[j];
    strchar[j] = tempChar;
    i++;
    j--;
  }
  str = strchar.join(""); // converting array to string
  return str;
}
console.log(reverseString(str));
