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
palindrome("madam");
