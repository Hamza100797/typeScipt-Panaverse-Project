import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const welcome = async () => {
    let greeting = chalkAnimation.rainbow('lets Start Some Calculation');
    await sleep();
    greeting.stop();
    // console.log(`Calculator Design`)
    console.log(`\t \t\ \t calculator By Hamza`);
};
await welcome();
const askQuestion = async () => {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            name: 'operator',
            message: "Select which Operation Do You Want ?",
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', "Power"]
        },
        {
            type: 'number',
            name: 'number1',
            message: "Enter First Number ?",
        },
        {
            type: 'number',
            name: 'number2',
            message: "Enter Second Number ?",
        }
    ])
        .then((ans) => {
        // Use user feedback for... whatever!!
        if (ans.operator === "Addition") {
            let res = ans.number1 + ans.number2;
            console.log(`${ans.number1} + ${ans.number2} = ${res}`);
        }
        else if (ans.operator === "Subtraction") {
            let res = ans.number2 - ans.number1;
            console.log(`${ans.number2} - ${ans.number1} = ${res}`);
        }
        else if (ans.operator === "Multiplication") {
            let res = ans.number1 * ans.number2;
            console.log(`${ans.number1} * ${ans.number2} = ${res}`);
        }
        else if (ans.operator === "Division") {
            let res = ans.number1 / ans.number2;
            console.log(`${ans.number1} / ${ans.number2} = ${res}`);
        }
        else if (ans.operator === "Power") {
            let res = ans.number1 ** ans.number2;
            console.log(`${ans.number1} ** ${ans.number2} = ${res}`);
        }
        else {
            console.log(chalk.red("Some Thing Went Wrong"));
        }
    });
    // .catch((error) => {
    //   if (error.isTtyError) {
    //     // Prompt couldn't be rendered in the current environment
    //   } else {
    //     // Something else went wrong
    //   }
    // });
};
const startAgain = async () => {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: "Do You want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == "Y" || again.restart == "yes" || again.restart == 'yes');
};
startAgain();
