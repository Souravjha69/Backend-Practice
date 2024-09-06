const sum = (a, b) => a+b;
const mul = (a, b) => a*b;
const gh = 9.7;
const pi = 3.14;

// module.exports = 123;

// let souravObj = {
//     sum : sum,
//     mul : mul,
//     gh  : gh,
//     pi  : pi,
// }
// module.exports = souravObj;

// Here module.exports is a object which object is exporting.

exports.sum= (a,b)=> a+b; // This is also the way of exporting the file here. 

exports.Sourav = "I'm a good boy";