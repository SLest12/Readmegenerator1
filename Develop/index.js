// TODO: Include packages needed for this application

const inquirer = require("inquirer") ;
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Title of Project?'
    },

    {
        type: 'input',
        name: 'name',
        message: 'What is your name'
    },

    {
        type: 'input',
        name: 'githubusername',
        message: 'Input Github user name'
    },


    {
        type: 'input',
        name: 'email',
        message: 'Input your Email address'
    },



    {
        type: 'input',
        name: 'installation',
        message: 'What is the install process'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this app'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are contributing guidelines'
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
// Function call to initialize app
init();
