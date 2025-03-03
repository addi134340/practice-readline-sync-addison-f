const readlineSync = require('readline-sync');

let fullName = readlineSync.question("What is your first and last name? ");

console.log("----------------------------------");
console.log("Good Morning " + fullName + "!");
console.log("----------------------------------");

//questions

let questionOne = readlineSync.question("1. What is the difference between a string and a boolean? ");
let questionTwo = readlineSync.question("2. What is initialization? ");
let questonThree = readlineSync.question("3. Is implicit type conversion automatic or manual? ");
let questionFour = readlineSync.question("4. What is readline-sync? ")
let questionFive = readlineSync.questionInt("5. How many number inputs are there for readline-sync? ");

console.log("-----------------------------------");

console.log("For question one, you answered: " + questionOne);
console.log("For question two, you answered: " + questionTwo);
console.log("For question three, you answered: " + questonThree);
console.log("For question four, you answered: " + questionFour);
console.log("For question five, you answered: " + questionFive);