const removeFromArray = function (array, ...arg) {
  const newArray = [];
  array.forEach((element) => {
    if (!arg.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// removeFromArray([1, 2, 3, 4], 3, 2, 4);
// console.log(array);
// Do not edit below this line
module.exports = removeFromArray;
