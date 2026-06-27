// Find the average of two numbers
// Syntax
// function <name>(parameters) {
//    // code to be executed
// }

function average(num1, num2) {
   let average = (num1 + num2) / 2;
   console.log(`The average of ${num1} and ${num2} is ${average}`);
}

average(10, 20); // Output: The average of 10 and 20 is 15
average(5, 15); // Output: The average of 5 and 15 is 10
average(7, 3); // Output: The average of 7 and 3 is 5

function printMyBio() {
   console.log("My name is John Doe. I am a software developer with a passion for coding and problem-solving. I have experience in various programming languages and enjoy learning new technologies.");
}

printMyBio(); 

function isEven(num) {
   if (num % 2 === 0) {
      return true;
   } else {
      return false;
   }  
}

let res = isEven(4);
console.log(res); // Output: true

res = isEven(7);
console.log(res); // Output: false


//I want to find sum of multiple of any number.
//Input : 2
// Sum : 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20 = `110`
function sumOfMultiples(num) {
   let sum = 0;
   for (let i = 1; i <= 10; i++) {
      sum = sum + (num * i);
   }
   return sum;}

let sumof2 = sumOfMultiples(2);
let sumof10 = sumOfMultiples(10);

console.log(sumof2 + sumof10); // Output: 660
