class Cars {
  constructor(model, make, year, color = "yellow") {
    this.model = model;
    this.make = make;
    this.year = year;
    this.color = color;
  }
  updateColor(color) {
    this.color = color;
  }
  updateYear(year) {
    this.year = year;
  }
  addWheels() {
    this.wheels = 4;
  }
  printAll() {
    return `The ${this.make} ${this.model} is from ${this.year}`;
  }
}

const toyota = new Cars("Camry", "Toyota", 2020, "Blue");
const honda = new Cars("Accord", "Honda", 2022);
console.log(toyota);
console.log(honda);
toyota.updateColor("Purple");
console.log(toyota);
honda.updateYear(2024);

honda.addWheels();
console.log(honda);
console.log(honda.printAll());
console.log(toyota.printAll());
