const add = function (a, b) {
  let value = a + b;
  return value;
};

const subtract = function (a, b) {
  value = a - b;
  return value;
};

const sum = function (array) {
  let value = 0;
  const mapArr = array.map((num) => (value += num));
  return value;
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return (value = a ** b);
};

const factorial = function (a) {
  if (a <= 1) {
    return 1;
  } else {
    let value = 1;
    for (let i = 1; i <= a; i++) {
      value *= i;
    }
    return value;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
