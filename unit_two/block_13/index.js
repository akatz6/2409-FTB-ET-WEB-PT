// let age = 31;

// if (age < 21) {
//   console.log("You cannot drink legally");
// } else if (age === 21) {
//   console.log("Congrats, learn to drink responsibly");
// } else {
//   console.log("You can drink legally");
// }

// age = 11;

// if (age < 21) {
//   console.log("You cannot drink legally");
// } else if (age === 21) {
//   console.log("Congrats, learn to drink responsibly");
// } else {
//   console.log("You can drink legally");
// }

// age = 21;

// if (age < 21) {
//   console.log("You cannot drink legally");
// } else if (age === 21) {
//   console.log("Congrats, learn to drink responsibly");
// } else {
//   console.log("You can drink legally");
// }

// let boolean = true;
// console.log(boolean);
// console.log(!boolean);

// if (boolean) {
//   console.log("This is true");
// }

// boolean = false;
// if (!boolean) {
//   console.log("This is not true");
// }

// let hungry = true;
// let sleepy = true;

// if (hungry && sleepy) {
//   console.log("Eat and go to sleep");
// }

// sleepy = false;
// thirsty = false;
if ((thirsty && sleepy) || hungry) {
  console.log("You might be hungry or might be sleepy");
}

// function checkIfCanDrink(age) {
//   if (age < 21) {
//     console.log("You cannot drink legally");
//   } else if (age === 21) {
//     console.log("Congrats, learn to drink responsibly");
//   } else {
//     console.log("You can drink legally");
//   }
// }

// checkIfCanDrink(11)
// checkIfCanDrink(21)
// checkIfCanDrink(31)

// function typeOfDinner(type) {
//   if (type === "Chinese") {
//     console.log("No thanks, I don't like MSG");
//   } else if (type === "Indian") {
//     console.log("Yum, did you get some naan");
//   } else {
//     console.log("Sounds tasty");
//   }
// }

const typeOfDinner = (type) => {
  if (type === "Chinese") {
    return ["Chinese Garden", "City Wok"];
  } else if (type === "Indian") {
    return ["Indian Bistro", "Mumbai Palace"];
  } else {
    return "Sounds tasty";
  }
};

let result = typeOfDinner("Chinese");
console.log(result);
result = typeOfDinner("Indian");
console.log(result);
