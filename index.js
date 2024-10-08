//Write your solutions in this file, don't forget to test your functions.
//Helloooooo :D
//1
const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
countFromOne(10);
//2
const countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
countEveryOdd(10);
//3
const isNegative = (num) => {
  if (num < 0) {
    console.log("True");
  } else {
    console.log("False");
  }
};

isNegative(3);
isNegative(-2);
isNegative(Math.Pi);
//4
const betweenFiveAndTwenty = (int) => {
  if (int > 5 && int < 20) {
    return "True";
  } else {
    return "False";
  }
};

console.log(betweenFiveAndTwenty(12));
console.log(betweenFiveAndTwenty(5));
console.log(betweenFiveAndTwenty(100));
//5
const sumOfThreeOrFive = () => {
  let total = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
};

console.log(sumOfThreeOrFive());
//6
const isAllLowerCase = () => {};
