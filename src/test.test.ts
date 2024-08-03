import { convert } from "./test";

describe("convert関数は数を文字列に変換する", () => {
  describe("3 の倍数の時は数の代わりに「Fizz」", () => {
    test("3を渡すと文字列'Fizz'を返す", () => {
      // 実行 & 検証
      expect(convert(3)).toBe("Fizz");
    });
  });
  describe("5 の倍数の時は数の代わりに「Buzz」", () => {
    test("5を渡すと文字列'Buzz'を返す", () => {
      // 実行 & 検証
      expect(convert(5)).toBe("Buzz");
    });
  });
  describe("その他の数の場合はそのまま文字列に変換する", () => {
    test("1を渡すと文字列1を返す", () => {
      // 実行 & 検証
      expect(convert(1)).toBe("1");
    });
  });
});
