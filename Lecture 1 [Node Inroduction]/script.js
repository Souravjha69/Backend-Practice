// let n = 5;

// for (let i=0; i<n; i++ ) {
//     console.log ("Hello", i);
// }

// console.log("Bye");
// console.log(process.argv);

// let args = process.argv;

// for (let i = 2; i < args.length; i++ ) {
//     console.log("Hello to", args[i]);
// }

//here we are importing the value from one file to next file using module.exports.
// const math = require ("./math");
// console.log (math, "This is your value");
// console.log (math.sum(2,2));

const math = require("./math");
console.log(math.sum(2,2));
console.log(math.Sourav);