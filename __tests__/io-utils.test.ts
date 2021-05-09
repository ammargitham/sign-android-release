import { getReleaseFile } from "../src/io-utils";

describe("getReleaseFile", () => {
  it("should return undefined when the given release files is an empty array", () =>
    expect(getReleaseFile([])).toEqual(undefined));

  it("should return the first release file", () => {
    const file = [{ name: "file" }]
    const expected = getReleaseFile(file);
    expect(expected).toEqual(file);
  });
});
