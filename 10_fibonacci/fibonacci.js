const fibonacci = function (num) {
  let fib = parseInt(num);
  if (fib < 0) {
    return "OOPS";
  }
  const array = [0, 1];
  for (let i = 2; i < fib + 1; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array[fib];
};

// console.log(fibonacci("-1"));

// Do not edit below this line
module.exports = fibonacci;
