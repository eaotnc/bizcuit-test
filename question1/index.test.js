const sum = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 10 + -12 to equal 22", () => {
  expect(sum(10, -12)).toBe(-2);
});

test("adds 10 + abc to equal 3", () => {
  expect(sum(100, "abc")).toBe("Error");
});
