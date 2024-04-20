#! /usr/bin/env node
// Import the 'inquirer' and 'chalk' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Print the colorful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code with Shazia - Word Counter"));
console.log("=".repeat(60));
// Decline a constant  'answer' and assigin it to the ressult of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        massage: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Your sentance word count is: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
