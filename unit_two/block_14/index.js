const animals = ["dog", "cat", "cow", "monkey", "rabbit", "elephant", "koala"];
// console.log(animals);
// console.log(animals[0]);
// console.log(animals[3]);
animals.push("giraffe");
animals.push("bird");
// console.log(animals);
// const lastAnimal = animals.pop();
// console.log(animals);
// console.log(lastAnimal);
// console.log(animals[animals.length - 1]);
animals.unshift("bear");
// console.log(animals);
// const firstAnimal = animals.shift();
// console.log(animals);
// console.log(firstAnimal);
// console.log(animals);

// console.log(animals);
// const sliceArr = animals.slice(2, 4);
// console.log(sliceArr);
// console.log(animals);

// const spliceArr = animals.splice(2, 3);
// console.log(spliceArr);
// console.log(animals);
//line 44      line 45          line 47
// for (let i = 0; i < animals.length; i++) {
//   console.log(`The value is ${animals[i]} and the index is ${i}`);
// }
/*
    start out at 0 let i = 0
    check if i is smaller then the length of the array i < animals.length
    if it is we go into our logic, inside the for loop
    console.log(`The value is ${animals[i]} and the index is ${i}`)
    increment by one i++
    i = 1
    check if i is smaller then the length of the array i < animals.length
    if it is we go into our logic, inside the for loop

    repeating until the value of i is greater then the length of the array
*/

// let index = 0;
// while (index < animals.length) {
//   console.log(`The value is ${animals[index]} and the index is ${index}`);
//   index++;
// }
// console.log(animals);

// const printAnimals = () => {
//   console.log(animals);
//   let inFunction = "here";
//   console.log(inFunction);
//   for (let i = 0; i < animals.length; i++) {
//     const animal = animals[i];
//     console.log(animal);
//     if (animal) {
//       let inIf = true;
//       console.log(inIf);
//     }
//   }
// };

// printAnimals();
// console.log(inFunction);

const getAllPerfectlyDivideByThree = (arr) => {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 3 === 0) {
      console.log(num);
      returnArr.push(num);
    }
  }
  return returnArr;
};

const returnSumOfAllPerfectlyDivideByThree = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 3 === 0) {
          console.log(num);
          sum += num
        }
      }
    return sum
};

const numArr = [14, 33, 56, 75, 60, 15];
const returnArr = getAllPerfectlyDivideByThree(numArr);
console.log(returnArr);
console.log(returnSumOfAllPerfectlyDivideByThree(numArr));
