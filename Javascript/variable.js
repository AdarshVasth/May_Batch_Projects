let PI = 3.14; //Declaration and initialization of a variable

let radius;//Declaration of a variable without initialization
radius = 5; //Assignment of a value to the variable
console.log(PI); 
console.log("we were able to print the value of PI");
PI = 3.14159;
console.log(PI);

const GRAVITY = 9.81; //Declaration and initialization of a constant variable
console.log(GRAVITY);
// GRAVITY = 10; // This will throw an error because GRAVITY is a constant
GRAVITY = 10; // This will also throw an error because GRAVITY is a constant

Operators:
-- Assignment operator (=)
-- Arithmetic operators (+, -, *, /)

a = 10;
b = 5;
sum = a + b; // 15
difference = a - b; // 5
product = a * b; // 50
quotient = a / b; // 2

a = 10.2312;
b = 5.1234;
sum = a + b;    // 15.3546

a = 10;
b = 1.23432;
sum = a + b;    // 11.23432

a = "5";
b = 10; //"10"
sum  = a + b;  // "510" (string concatenation) 

a = "hello";
b = "world";
sum = a + b; // "helloworld" (string concatenation)

a = "5";
b = 2;
product = a * b; // 10 (string "5" is converted to number 5)

-- Comparison operators (==, ===, !=, !==, >, <, >=, <=)
let a = 5;  //integer 
let b = "5"; //string converted to number for comparison
let c = "5"; //string

console.log(a == b); // true compares values after type coercion

console.log(a === b); // false 
console.log(b === c); // true compares values and types

//!= not equal to operator
let a = 5;
let b = 4;
let c = 4;
console.log(a != b); // true
console.log(b != c); // false

//!== not strictly equal to operator
let x = 5;
let y = "5";
console.log(x !== y); // true (different types)

// > greater than operator
let a = 10;
let b = 5;
console.log(a > b); // true

// < less than operator
console.log(a < b); // false

// >= greater than or equal to operator
console.log(a >= b); // true
// <= less than or equal to operator


// Logical operators (&&, ||, !)
// Truth table

// Condition A     Condition B     A && B   A || B   !A
// true            true            true     true     false
// true            false           false    true     false
// false           true            false    true     true
// false           false           false    false    true

let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // false (both conditions must be true) eligible to vote

let hasAadhar = true;
let hasVoterID = false;
console.log(hasAadhar || hasVoterID); // true (both conditions are true) eligible to vote



let hasAadhar = false;
let hasVoterID = true;
console.log(hasAadhar || hasVoterID); // true (both conditions are true) eligible to vote


let hasAadhar = true;
let hasVoterID = true;
console.log(hasAadhar || hasVoterID); // true (both conditions are true) eligible to vote


let hasAadhar = false;
let hasVoterID = false;
console.log(hasAadhar || hasVoterID); // false (both conditions are false) not eligible to vote

// Increment and decrement operators (++, --)
let x = 5;
x++; // It will add 1 to the value of x
console.log(x); // 6
x--; //It will subtract 1 from the value of x
console.log(x); // 5

// Ternary operator (condition ? expression1 : expression2)
// expression1 is executed if the condition is true, otherwise expression2 is executed
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes
