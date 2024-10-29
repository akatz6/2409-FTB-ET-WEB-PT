const { sum, subtract } = require("./index");

test("Add 5 and 6 equals to 11", () => {
  expect(sum(5, 6)).toBe(11);
});

test("Add 5 and 6 not equals to 12", () => {
  expect(sum(5, 6)).not.toBe(12);
});

test("Subtract 10 and 1 equal 9", () => {
  expect(subtract(10, 1)).toBe(9);
});

test("Subtract 10 and 1 not to be equal 100", () => {
  expect(subtract(10, 1)).not.toBe(100);
});
