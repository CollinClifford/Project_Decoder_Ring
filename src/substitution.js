const substitutionModule = (function () {
  let standardAlph = "abcdefghijklmnopqrstuvwxyz";
  standardAlph = standardAlph.split("");
  function substitution(input, alphabet, encode = true) {
    let secretMessage = "";
    const alphArray = alphabet.split("");
    console.log("alphabet", alphabet)
    console.log("after split = ", alphArray);

    if (alphArray.length !== 26) {
      return false;
    }
    if (alphabet = "") {
      return false;
    }
    if (new Set(alphArray).size !== alphArray.length) {
      return false;
    }

    const alphObject = alphArray.reduce(
      (acc, value, i) => ((acc[value] = standardAlph[i]), acc),
      {}
    );

    if (encode) {
      input
        .toLowerCase()
        .split("")
        .forEach((inp) => {
          if (!alphArray.includes(inp)) {
            secretMessage += inp;
          } else {
            for (let item in alphObject) {
              const userAlph = item;
              const standAlp = alphObject[item];
              if (standAlp.includes(inp)) {
                secretMessage += userAlph;
              }
            }
          }
        });
      return secretMessage;
    }

    if (!encode) {
      input
        .toLowerCase()
        .split("")
        .forEach((inp) => {
          if (!alphArray.includes(inp)) {
            secretMessage += inp;
          } else {
            for (let item in alphObject) {
              const userAlph = item;
              const standAlp = alphObject[item];
              if (userAlph.includes(inp)) {
                secretMessage += standAlp;
              }
            }
          }
        });
      return secretMessage;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };