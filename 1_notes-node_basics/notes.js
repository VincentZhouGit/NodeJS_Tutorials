//inside all node files, there is a var called module
//everything in the moudle.exports object get exported
//  and this obeject will get assigned to  var notes in app.js

//could export variable and functions
//module.exports.age = 25;

// module.exports.addNote = function() {
//
// }
//the above is equivalent to (arrow notation)
//some notes about arrow function
//   (1)anonymous function could be sawpped into arrow function without any problen
//   (2)but the arrow funct
// ion does not bind the "this" keyword or args array
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note;'
}


//with arguments
module.exports.add = (a,b) => {
  return a + b;
};