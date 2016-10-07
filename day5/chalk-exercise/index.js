var chalk = require("chalk");

var message = "Hello " + chalk.bgCyan.bold.underline.black.red("World");
console.log(message);