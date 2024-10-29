console.log("Does this work?");

let weather = "cloudy";
const city = "Seattle";

console.log(weather)
console.log(city)

weather = "rainy";
// city = "Waterford"
console.log(weather)

const oldWay = "I live in " + city + " and the weather is " + weather;
console.log(oldWay)

const newWay = `I live in ${city} and the weather is ${weather}`
console.log(newWay)

let sum = 0
let newNumber = 10;
sum = sum + newNumber
console.log(sum)

sum = 0
sum += newNumber
console.log(sum)

sum++
console.log(sum)

sum *= newNumber
console.log(sum)

sum /= newNumber
console.log(sum)

console.log(4 % 2)
console.log(5 % 2)

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);
console.log(isTrue || isFalse);

console.log(isFalse);
console.log(!isFalse);

console.log(1 == "1")
console.log(1 == "2")
console.log(1 === "1")
console.log(1 === 1)

console.log(1 != "2");
console.log(1 !== 1)
