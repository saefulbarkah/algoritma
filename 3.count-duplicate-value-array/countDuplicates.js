console.clear();
const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

let result = {}; // empty object

// looping array query and giving by value 0 point
query.forEach((item) => {
  result[item] = 0;
});

// looping array input and check get result only have value not included like NaN
input.forEach((item) => {
  if (result.hasOwnProperty(item)) {
    // increment when value is avaiable
    result[item]++;
  }
});
console.log(result);
