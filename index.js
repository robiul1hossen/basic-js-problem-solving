// problem-1 ==> Reverse a String

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
const res1 = reverseString("hello");
console.log(res1);
