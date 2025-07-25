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
    expect(findmax([NaN, 2, NaN])).toBe(2);
  });
  test("a test with a single ordinal value", () => {
    expect(findmax([2])).toBe(2);
  });
  test("a test with more than one ordinal value with max value at index 0", () => {
    expect(findmax([5, 4, 3, 2, 1])).toBe(5);
  });
  test("a test with more than one ordinal value with max value at index N - 1, where N is length of the array", () => {
    expect(findmax([1, 2, 3, 4, 5, 6])).toBe(6);
  });
  test("a test with more than one ordinal value with max value between index 0 and N-1", () => {
    expect(findmax([1, 2, 6, 3, 4, 5])).toBe(6);
  });
  test("a test with a null value ", () => {
    expect(findmax([null])).toBe(null);
  });
});
