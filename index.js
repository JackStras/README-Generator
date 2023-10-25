// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description for your project."
    },
    {
        type: "input",
        name: "install",
        message: "Provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information"
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide any contributors."
    },
    {
        type: "input",
        name: "test",
        message: "Provide instructions for testing your project."
    },
    {
        type: "list",
        name: "license",
        message: "Select a license.",
        choices: ["None,", "Apache License 2.0", "MIT License", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
