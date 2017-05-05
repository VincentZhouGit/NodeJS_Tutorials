
//set this import as constant because we are not going to manipulate it
const fs = require('fs');
const os = require('os');

//to import own file, use its relative path
// and need to do export on the target file
const notes = require('./notes.js');

//import from 3rd party library(pass in the module name)
//  order: node will first search local module name "loadsh". if not found, search node_modules
const _ = require('lodash');

// var user = os.userInfo();
//
//
//
// //async call (and using ES6 formatting `` (versus '') to insert var)
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
//     if(err){
//         console.log('Unable to write to file')
//     }
// });
//
// // //sync call
// // fs.appendFileSync('greetings.txt', 'Hello world!');


var res = notes.addNote();
console.log(res);

console.log('Result:', notes.add(9, -2));


console.log(_.isString(true));

var filteredArray = _.uniq(['1','2','1',3,100,100]);
console.log(filteredArray);