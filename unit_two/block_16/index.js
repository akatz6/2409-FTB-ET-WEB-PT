const dogsNamesArr = ["Betty", "Bocce", "Lucy", "Rainier"];

// for (let i = 0; i < dogsNamesArr.length; i++) {
//   console.log(`The dogs name is ${dogsNamesArr[i]} and the index is ${i}`);
// }

// dogsNamesArr.forEach((dog) => {
//   console.log(dog);
// });

// dogsNamesArr.forEach((dog, index) => {
//   console.log(`The dogs name is ${dog} and the index is ${index}`);
// });

// const result = dogsNamesArr.find((element) => element === "Betty");
// console.log(result);

const result = dogsNamesArr.find((element) => {
  return element === "Betty"
});
console.log(result);

// let found = "";
// for (let i = 0; i < dogsNamesArr.length; i++) {
//   if (dogsNamesArr[i] === "Betty") {
//     found = dogsNamesArr[i];
//     break;
//   }
// }
// console.log(found);

// const numArr = [1, 2, 3, 4];
// const newArr = numArr.map((num) => num + 2);
// console.log(newArr);

// const newArrForLoop = [];
// for (let i = 0; i < numArr.length; i++) {
//   newArrForLoop.push(numArr[i] + 2);
// }
// console.log(newArrForLoop);

// const filteredArr = dogsNamesArr.filter((dog) => dog[0] === "B");
// console.log(filteredArr);

// const filtDog = [];
// for (let i = 0; i < dogsNamesArr.length; i++) {
//   if (dogsNamesArr[i][0] === "B") {
//     filtDog.push(dogsNamesArr[i]);
//   }
// }
// console.log(filtDog);

const numArr = [1, 2, 3, 4];

1 + 2;
3 + 3;
6 + 4;

const sum = numArr.reduce((acc, current) => acc + current, 3);
console.log(sum);

const sumWithNewStartingValue = numArr.reduce(
  (acc, current) => acc + current,
  3
);
console.log(sumWithNewStartingValue);

let total = 0;
for (let i = 0; i < numArr.length; i++) {
  console.log(`The total is ${total}`);
  total += numArr[i];
}
console.log(total);
