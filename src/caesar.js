const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let secretMessage = "";
    let tempSentence = "";
    lowerCaseInput = input.toLowerCase();
    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    if (!encode) {
      shift *= -1;
    }
    for (let i = 0; i < lowerCaseInput.length; i++) {
      if (
        lowerCaseInput.charCodeAt(i) < 97 ||
        lowerCaseInput.charCodeAt(i) > 122
      ) {
        tempSentence += lowerCaseInput[i];
        secretMessage += lowerCaseInput[i];
      } else if (
        lowerCaseInput.charCodeAt(i) > 96 ||
        lowerCaseInput.charCodeAt(i) < 123
      ) {
        tempSentence +=
          String.fromCharCode(lowerCaseInput.charCodeAt(i) + shift);
        let newShift = shift;
        if (tempSentence.charCodeAt(i) > 122) {
          newShift -= 26;
          secretMessage += 
            String.fromCharCode(lowerCaseInput.charCodeAt(i) + newShift);
        } else if (tempSentence.charCodeAt(i) < 97) {
          newShift += 26;
          secretMessage +=
            String.fromCharCode(lowerCaseInput.charCodeAt(i) + newShift);
        } else {
          secretMessage +=
            String.fromCharCode(lowerCaseInput.charCodeAt(i) + shift);
        }
      }
    }
    return secretMessage;
  }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };