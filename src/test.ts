export const convert = (num: number): string => {
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return String(num);
};
