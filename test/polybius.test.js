// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("checking the polybius module", () => {
  it("should return numbers when given a string of letters", () => {
    const expected = "314313134233";
    const actual = polybiusModule.polybius("collin", true);
    expect(actual).to.equal(expected);
  });
  it("should return letters when when given numbers", () => {
    const expected = "coll(i/j)n";
    const actual = polybiusModule.polybius("314313134233", (encode = false));
    expect(actual).to.equal(expected);
  });
  it("should return false if given an uneven number", () => {
    const expected = false;
    const actual = polybiusModule.polybius("31431313423", false);
    expect(actual).to.equal(expected);
  });
  it("should account for spaces in the decoding process", () => {
    const expected = "c o l l (i/j) n";
    const actual = polybiusModule.polybius("31 43 13 13 42 33", false);
    expect(actual).to.equal(expected);
  });
});
