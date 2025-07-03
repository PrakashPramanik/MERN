
// Assignment


// Q.2

// let res=""
// for(let i=0;i<=10;i++){
//     res+=i+ " "
// }
// console.log(res)

// Q.4

// let count = 1;
// do {
//     console.log("Welcome!");
//     count++;
// } while (count <= 5);


// Q.5  Using break keyword

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break; 
//     }
//     console.log(i);
// }

// Q.6  Skipping the current statement and moving to next statement

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue; 
//     }
//     console.log(i);
// }


// Q.7


// ans=2

// for (let j = 1; j <= 10; j++) {
//     console.log(ans +" * "+j +" = "+ ans*j);
// }


// Q.8

// let arr = [10, 20, 30, 40, 50];
// for (let i of arr) {
//     console.log(i);
// }


// Q.9 

// == Compares value only  3=="3"  --> true
// === Compares value and type(Strict check) 3==="3"  --> false

// Q.10

// let x = 5;
// console.log(x++ + ++x);

// x++ → returns 5, then x becomes 6
// ++x → increments to 7 and returns 7
// 5 + 7 = 12
// Output: 12

// Q.11
// && --> all condition should be true then it returns true
// || --> if any of the condition is true then it returns true


// let age = 20;
// let hasID = true;
// if (age > 18 && hasID) {
//     console.log("Eligible for voting");
// }

// let a = true;
// let b = false;

// console.log(a || b);

// Q.12


// let num = 15;
// if (num % 3 == 0 && num % 5 == 0) {
//     console.log(num + " is divisible by both 3 and 5.");
// } else {
//     console.log(num + " is not divisible by both 3 and 5.");
// }

// Q.13

// let n = 7;
// let result = (n % 2 == 0) ? "Even" : "Odd";
// console.log(result);

// Q.14  % --> returns the remainder

// for (let i = 1; i <= 20; i++) {
//     if (i % 4 === 0) {
//         console.log(i);
//     }
// }

// Q.15

// let age = 17;
// if (age >= 18) {
//     console.log("Eligible to vote.");
// } else {
//     console.log("Not eligible to vote.");
// }


// Q.16

// let marks = 89;

// if (marks >= 90) {
//     console.log("Grade: A");
// } else if (marks >= 75) {
//     console.log("Grade: B");
// } else if (marks >= 50) {
//     console.log("Grade: C");
// } else {
// console.log("Grade: F");
// }


// Q.17

// if --> Checks the first condition.

// else if --> Checks additional conditions if the "if" condition is false.

// else --> Executes if none of the above conditions are true.


// Q.18

// let num = -5;

// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// Q.19

// let number = 12;

// if (number % 2 == 0) {
//     if (number > 10) {
//         console.log("Even and greater than 10");
//     } else {
//         console.log("Even but not greater than 10");
//     }
// } else {
//     console.log("Odd number");
// }


// Q.20

// let isLoggedIn = true;

// console.log(isLoggedIn ? "Welcome back!" : "Please log in.");