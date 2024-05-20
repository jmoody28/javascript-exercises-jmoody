const repeatString = function (str, num) {
  let result = "";

  if (num < 0) {
    result += "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      result += str;
    }
  }

  return result;
};
repeatString("hey", 3); // returns 'heyheyhey'

repeatString("hello", 10);

repeatString("hi", 1);

repeatString("bye", 0);

repeatString("goodbye", -1);

repeatString();

repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
