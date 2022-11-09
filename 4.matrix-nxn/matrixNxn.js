console.clear();
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

let first = 0;
let secondary = 0;
let getValueFirst = "";
let getValueSecond = "";
for (let i = 0; i < Matrix.length; i++) {
  // first
  getValueFirst += Matrix[i][i];
  first += Matrix[i][i];

  // second
  getValueSecond += Matrix[i][Matrix.length - i - 1];
  secondary += Matrix[i][Matrix.length - i - 1];
}
let result = first - secondary; // 15 - 12

// Output
console.log(
  `Diagonal Pertama : ${getValueFirst.split("").join(" + ")} = ${first}`
);
console.log(
  `Diagonal Kedua : ${getValueSecond.split("").join(" + ")} = ${secondary}`
);
console.log(`Maka hasilnya adalah : ${first} - ${secondary} = ${result}`); // 3
