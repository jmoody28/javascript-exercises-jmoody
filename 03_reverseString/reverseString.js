const reverseString = function (str) {
  const splitString = str.split("");
  const reverseString = splitString.reverse().join("");
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
