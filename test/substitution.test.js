// Write your tests here!
const substitutionModule = require("../src/substitution");

describe("the substitution test should return false under these circumstances", () => {
  it("If the alphabet is less than 26 characters", () => {
    expected = false;
    actual = substitutionModule.substitution("a message", "plmoknijbuhvygctfxrdzeswa");
    expect(actual).to.equal(expected);
  });
  it("if the alphabet is more than 26 characters", () => {
    expected = false;
    actual = substitutionModule.substitution("a message", "plmoknijbuhvygctfxrdzeswaq!");
    expect(actual).to.equal(expected);
  });
  it("If there is no alphabet", () => {
    expected = false;
    actual = substitutionModule.substitution("a message", "");
    expect(actual).to.equal(expected);
  });
  it("If there are duplicate letters/symbols", () => {
    expected = false;
    actual = substitutionModule.substitution("a message", "plmoknijbuhvygctfxrdzesqqq");
    expect(actual).to.equal(expected);
  });
});
describe("How substitution should return when encoding", () => {
  it("should return with a coded string when inputed", () => {
    expected = "ykrrpik";
    actual = substitutionModule.substitution(
      "message",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
  it("should ignore spaces", () => {
    expected = "p ykrrpik";
    actual = substitutionModule.substitution(
      "a message",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    expected = "ykrrpik";
    actual = substitutionModule.substitution(
      "MESSAGE",
      "plmoknijbuhvygctfxrdzeswaq"
    );
    expect(actual).to.equal(expected);
  });
});
describe("How substitution should return we decoding", () => {
  it("should return with decoded string when inputed", () => {
    expected = "message";
    actual = substitutionModule.substitution(
      "ykrrpik",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    expect(actual).to.equal(expected);
  });
  it("should ignore spaces", () => {
    expected = "a message";
    actual = substitutionModule.substitution(
      "p ykrrpik",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
  });
  it("should ignore capitalization", () => {
    expected = "message";
    actual = substitutionModule.substitution(
      "YKRRPIK",
      "plmoknijbuhvygctfxrdzeswaq",
      false
    );
    expect(actual).to.equal(expected);
  });
});

const expect = require("chai").expect;
