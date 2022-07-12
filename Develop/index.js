// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {name: 'license',
    message: 'Select license badge.',
    type: 'list',
    choices:  ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License','CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International','Attribution-NonCommercial-NoDerivatives 4.0 International','Eclipse Public License 1.0','GNU GPL v3','GNU GPL v2', 'GNU AGPL v3','GNU LGPL v3', 'GNU FDL v1.3','IBM Public License Version 1.0','ISC License (ISC)']},
    {name: 'title',
    message: 'What is the title of this application?',
    type: 'input'},
    {name: 'description',
    message: 'What does this application do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contributing',
    message: 'How do I contribute to this application?',
    type: 'input'},
    {name: 'testing',
    message: 'How do I test this application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
    {name: 'fileName',
    message: 'What do you want to call this readme?',
    type: 'input'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err): console.log('Your README has been generated!'))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await inquirer.prompt(questions);
    writeToFile(answers.fileName, (generateMarkdown(answers)));
}

// Function call to initialize app
init();
