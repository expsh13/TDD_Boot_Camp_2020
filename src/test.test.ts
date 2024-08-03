import { convert } from "./test";

test("1を渡すと文字列1を返す", () => {
  // 実行 & 検証
  expect(convert(1)).toBe("1");
});
