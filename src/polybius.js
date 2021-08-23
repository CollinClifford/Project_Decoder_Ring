const polybiusModule = (function () {
  const alphabetObj = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
  normalAlphabet = normalAlphabet.split("");
  function polybius(input, encode = true) {
    let secretMessage = "";

    if (encode) {
      input
        .toLowerCase()
        .split("")
        .forEach((inp) => {
          if (!normalAlphabet.includes(inp)) {
            secretMessage += inp;
          } else {
            for (let item in alphabetObj) {
              const number = item;
              const letter = alphabetObj[item];
              if (letter.includes(inp)) {
                secretMessage += number;
              }
            }
          }
        });
      return secretMessage;
    }

    if (!encode) {
      const combinedNum = [];
      const noSpaces = input.split("").filter((inp) => inp !== " ");
      if (noSpaces.length % 2 != 0) {
        return false;
      }
      input.split(" ").forEach((word) => {
        combinedNum.push(word.match(/.{1,2}/g));
      });
      combinedNum.forEach((word, index) => {
        word.forEach((pair) => {
          if (pair == " ") {
            secretMessage += pair;
          } else if (pair == "42") {
            secretMessage += "(i/j)";
          } else {
            for (let item in alphabetObj) {
              const number = item;
              const letter = alphabetObj[item];
              if (number.includes(pair)) {
                secretMessage += letter;
              }
            }
          }
        });
        if (index !== combinedNum.length - 1) {
          secretMessage += " ";
        }
      });
      return secretMessage;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };