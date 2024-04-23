#! /usr/bin/env node
// for npm publish
import inquirer from "inquirer";
// STEPS:
//  1; Computer will generate a Random Number
//  2; User input for guessing number
//  3; Compare user input with computer generated number and show result
// const randomNumber = 13;
// const randomNumber = Math.random();
// This will generate random number between 0 & 1 !!
// const randomNumber = Math.floor(Math.random());
//  this will generate only 0 number (means round of kr ky deta ha)
// const randomNumber = Math.floor(Math.random()*10);
// ye hamein 0 sy 9 tk value degaa (because ham 10 sy multiply kr rhy hain, agr 5 sy mltiply krty toh answer 0-4 tk ayega) !!
// const randomNumber = Math.floor(Math.random()*10+1);
// +1 kreingy tohh hmary ps "0" nhi ayegaa, because hamny ab +1 krdia ha
// const randomNumber = Math.floor(Math.random() * 6 + 1);
// ab hamary ps 1-6 tk numbers ayeingy
const randomNumber = Math.floor(Math.random() * 10 + 1);
//  ab hamary ps 1-10 nmbrs generate hongy
// console.log(randomNumber)
console.log("Hey, Welcome to Number Guessing Game !!");
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
        // now 3rd step done
    },
]);
// console.log(answers);
//  1st & 2nd Steps done!!
//  if means (AGR YE CONDITION TRUE TO HA TO "if" wala print hoga, AGR FALSE HA TOH "else" wala print hoga)
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number.");
}
else {
    console.log("Sorry, You Guessed Wrong Number.");
}
