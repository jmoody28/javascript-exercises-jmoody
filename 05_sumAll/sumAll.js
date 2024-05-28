const sumAll = function (start, end) {
  let sum = 0;
  if (Number.isInteger(start && end)) {
    if (start < 0 || end < 0) {
      return "ERROR";
    } else if (start < end) {
      for (let i = start; i <= end; i++) {
        sum += i;
      }
    }
    for (let i = end; i <= start; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};
// Do not edit below this line
module.exports = sumAll;
