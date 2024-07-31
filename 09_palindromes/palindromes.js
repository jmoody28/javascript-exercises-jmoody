const palindromes = function (str) {
  const newStr = removePunc(str);
  function removePunc(str) {
    return str
      .toLowerCase()
      .split("")
      .filter((char) => {
        return /[a-zA-Z0-9]/.test(char);
      })
      .join("");
  }

  const reverseString = newStr.split("").reverse().join("");
  if (newStr === reverseString) {
    return true;
  } else {
    return false;
  }
};
// console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
