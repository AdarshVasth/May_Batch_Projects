//responsible for finding the average of two numbers
function average(a, b) {
    let average = sum(a, b) / 2;
    return average;
}

//responsible for finding the sum of two numbers
function sum(a, b) {
    let sum = a + b;
    return sum;
}

let avg = average(10, 20);
console.log(`The average of 10 and 20 is ${avg}`); // Output: The average of 10 and 20 is 15

//Recursion??

