const findmax = require("../src/findmax.js");

describe("testing findmax", () => {
  // TODO: a test that results in failure (do not compute maximum) it should fail
  test("a test that fails", () => {
    expect(findmax([1, 2, 3])).toBe(3);
  });
  // TODO: a test that results in error, it should throw an error that the test won't catch
  test("a test that throws error", () => {
    expect(() => findmax([])).toThrow();
  });
  // TODO: a test that results in pass
  test("a test that passes", () => {
    expect(findmax([1, 9, 3])).toBe(9);
  });
  test("a test with null values", () => {
    expect(findmax([null, null])).toBe(null);
  });
  test("a test with NaN values", () => {
    expect(findmax([NaN, NaN, 2])).toBe(2);
  });
});
