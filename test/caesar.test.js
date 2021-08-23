// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar should shift properly with the following conditions when encoding", () => {
  it("shift all characters up when encoding", () => {
    const expected = "uijt jt b nfttbhf";
    const actual = caesarModule.caesar("this is a message", 1);
    expect(actual).to.equal(expected);
  });
  it("skip spaces and symbols", () => {
    const expected = "!@ #$";
    const actual = caesarModule.caesar("!@ #$", 1);
    expect(actual).to.equal(expected);
  });
  it("shift all characters down when encoding", () => {
    const expected = "sghr hr z ldrrzfd";
    const actual = caesarModule.caesar("this is a message", -1);
    expect(actual).to.equal(expected);
  });
  it("example with z", () => {
    const expected = "fybnqmf a";
    const actual = caesarModule.caesar("example Z", 1);
    expect(actual).to.equal(expected);
  });
});
describe("Caesar should shift properly with the following conditions when decoding", () => {
  it("shift all characters up when decoding", () => {
    const expected = "cdbncdc ldrrzfd";
    const actual = caesarModule.caesar("decoded message", 1, false);
    expect(actual).to.equal(expected);
  });
  it("skip spaces and symbols", () => {
    const expected = "!@ #$";
    const actual = caesarModule.caesar("!@ #$", 1, false);
    expect(actual).to.equal(expected);
  });
  it("shift all characters down when decoding", () => {
    const expected = "efdpefe nfttbhf";
    const actual = caesarModule.caesar("decoded message", -1, false);
    expect(actual).to.equal(expected);
  });
  it("example with z", () => {
    const expected = "fybnqmf a";
    const actual = caesarModule.caesar("example Z", -1, false);
    expect(actual).to.equal(expected);
  });
});
describe("checking caesar module shift function limitations", () => {
  it("should return false if shift is not determined", () => {
    const expected = false;
    const actual = caesarModule.caesar("caesar");
    expect(actual).to.equal(expected);
  });
  it("should return false if shift equals 0", () => {
    const expected = false;
    const actual = caesarModule.caesar("caesar", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesarModule.caesar("caesar", -26);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    const expected = false;
    const actual = caesarModule.caesar("caesar", 26);
    expect(actual).to.equal(expected);
  });
});
