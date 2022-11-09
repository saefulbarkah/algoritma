console.clear();
const sestences = "Saya sangat senang mengerjakan soal algoritma";
function findStringLongest(str) {
  let stringArr = str.split(" "); // make string to array
  let longest = 0; // count longest string of array
  let strTemp = ""; // string empty

  // start looping sorting array
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] < stringArr[i + 1]) {
      longest = stringArr[i].length;
      strTemp = stringArr[i].split(" ");
    }
  }

  // return output
  console.log(strTemp + " : " + longest + " Characters");
}

findStringLongest(sestences);
