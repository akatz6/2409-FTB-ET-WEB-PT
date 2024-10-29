const city = {
  name: "Seattle",
  neighborhoods: ["Capital Hill", "Freemont", "Ballard", "Green Lake"],
  established: 1853,
};

// console.log(city.name);
// console.log(city.neighborhoods[3]);
// console.log(city.established);

// console.log(city["name"]);

city.weather = "Sunny";
// console.log(`I live in ${city.name} and it is ${city.weather} outside`);

// city.weather = "Rainy";
// console.log(`I live in ${city.name} and it is usually ${city.weather} outside`);

// console.log(city);
// delete city.weather;
// console.log(city);

// for (const key in city) {
//   console.log(`This is the key ${key}`);
//   console.log(`This is the value ${city[key]}`);
// }

// console.log(Object.keys(city));
// console.log(Object.values(city));

const animalSounds = {
  dog: "bark",
  cat: "meow",
  wolf: "awwwwwoooooooo",
  frog: "ribit",
};

const getAnimalSounds = (animal) => {
  return animalSounds[animal];
};

console.log(getAnimalSounds("dog"));
console.log(getAnimalSounds("cat"));
