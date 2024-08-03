import { convert } from "./test";

describe("convert test", () => {
  test("1を渡すと文字列1を返す", () => {
    // 実行 & 検証
    expect(convert(1)).toBe("1");
  });
  test("2を渡すと文字列2を返す", () => {
    // 実行 & 検証
    expect(convert(2)).toBe("2");
  });
  test("3を渡すと文字列'Fizz'を返す", () => {
    // 実行 & 検証
    expect(convert(3)).toBe("Fizz");
  });
  test("5を渡すと文字列'Buzz'を返す", () => {
    // 実行 & 検証
    expect(convert(5)).toBe("Buzz");
  });
});
