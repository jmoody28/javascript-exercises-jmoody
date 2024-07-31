const reverseString = function (str) {
  const splitString = str.split("");
  const reverseString = splitString.reverse().join("");
  return reverseString;
};

function removePunctuation(str) {
  return str
    .split("")
    .filter((char) => {
      return /[a-zA-Z]/.test(char);
    })
    .join("");
}

let text = "GeeksforGeeks a computer science portal.";
let cleanedText = removePunctuation(text);
console.log(cleanedText);

// Do not edit below this line
module.exports = reverseString;
