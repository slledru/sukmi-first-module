const { torusVolume, sphereVolume } = require('./volume') // Destructuring
const chalk = require('chalk')

console.log(chalk.yellow(torusVolume(4, 3)));

console.log(chalk.bgRed(chalk.black(sphereVolume(1))));
