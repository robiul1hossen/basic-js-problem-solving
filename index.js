// problem-1 ==> Reverse a String

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
const res1 = reverseString("hello");
// console.log(res1);

// problem-2 ==>  Count Vowels in a String
const vowelsCount = (word) => {
  word = word.toLowerCase();
  let totalVowels = 0;
  for (let i = 0; i < word.length; i++) {
    let findVowel = word[i];
    if (
      findVowel === "a" ||
      findVowel === "e" ||
      findVowel === "i" ||
      findVowel === "o" ||
      findVowel === "u"
    ) {
      totalVowels++;
    }
  }
  return totalVowels;
};
const res2 = vowelsCount("programming");
// console.log(res2);

// problem-3 ==>  Check for Palindrome
const palindrome = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (str === rev) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// palindrome("madam");

// problem-4 ==>  Find the Maximum Number
const maxNum = (numbers) => {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};
const res4 = maxNum([1, 2, 6, 9, 7, 65]);
// console.log(res4);

// problem-5 ==> Remove Duplicates from an Array
const removeDuplicate = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
const res5 = removeDuplicate([1, 2, 2, 3, 4, 4]);
// console.log(res5);

// problem-6 Sum of All Numbers in an Array
const sumOfArr = (arr) => {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};
const res6 = sumOfArr([1, 2, 3, 4]);
// console.log(res6);

// Problem-7 ==> Find Even Numbers in an Array
const findEven = (arr) => {
  let even = [];
  for (let i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
};
const res7 = findEven([1, 2, 3, 4, 5, 6]);
// console.log(res7);

// Problem-8 ==> Capitalize First Letter of Each Word

const capitalize = (sentence) => {
  const words = sentence.toLowerCase().split(" ");
  const capWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const result = capWords.join(" ");
  return result;
};
const res8 = capitalize("hello programming hero");
// console.log(res8);

// Problem-9 ==> Find the Factorial of a Number
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};
const res9 = factorial(5);
// console.log(res9);

// Problem-10 ==> PingPong Challenge
const pingPong = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pingPong");
    } else if (i % 3 === 0) {
      console.log("ping");
    } else if (i % 5 === 0) {
      console.log("pong");
    } else {
      console.log(i);
    }
  }
};
// pingPong();
