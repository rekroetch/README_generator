const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?" 
     },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project."
    }, 
    {
        type: "list",
        name: "license",
        message: "What type of license should your project have?",
        choices: ["GNU", "MIT"]
    }, 
    {
        type: "input",
        name: "installation",
        message: "How should a user install any dependencies?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "Give an example of how your project is used, include expected results if possible."
    }, 
    {
        type: "list",
        name: "contributing",
        message: "How would you like others to contribute to your project?",
        choices: ["Pull requests are welcome.", "Not open to contributions."]
    }, 
    {
        type: "input",
        name: "tests",
        message: "How should a user run tests on your project?"
    }, 
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }, 
      
];


// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const generate = generateMarkdown(data)
            fs.writeFile('README.md', generate, (err) => {
                err ? console.log(err) : console.log('Success!')
            });
        })
}

// function call to initialize program
init();
