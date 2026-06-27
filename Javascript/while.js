//While loop
//Syntax
// while (condition) {
//     // code to be executed
// }

let i = 51;
let sum=0;
while (i<=100) {
    sum += i; // this is also a short hand for sum = sum + i
    i++;
}

console.log("The sum of all number from 51 to 100 is", sum);

let j = 100;
let sum= 0;
while (j>=51) {
    sum += j; // this is also a short hand for sum = sum + i
    j--;
}
console.log("The sum of all number from 100 to 51 is", sum);