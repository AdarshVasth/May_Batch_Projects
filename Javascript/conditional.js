// Conditional Statements

// If statement
let age = 10;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//odd number or even
// number is divisible by 2 then it is even otherwise odd
// We use % modulus operator to find the remainder when number is divided by 2
let number = 46;

if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

let value = number % 2 === 0 ? "even" : "odd";
console.log(value)

if ( age >= 18 && age <= 65) {
    console.log("You are an adult.");
    // We can also use nested if statements to check for more specific conditions
} else  {
    console.log("You are a minor.");
}

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

