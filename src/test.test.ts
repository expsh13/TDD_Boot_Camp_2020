import { convert } from "./test";

test("1を渡すと文字列1を返す", () => {
  // 下記の数字の順番で書く。
  // 3.準備
  // 2.実行
  const actual: string = convert(1);
  // 1.検証
  expect(actual).toBe("1");
});
