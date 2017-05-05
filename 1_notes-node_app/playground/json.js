// var obj = {
//     name: 'VC'
// };
//
// //stringify: obj -> string
// var stringObjc = JSON.stringify(obj)
// console.log(typeof stringObjc);
// console.log(stringObjc);


// //JSON.parse: string->obj
// var personString = '{"name": "VC", "age": 25}';
// var person = JSON.parse(personString);
//
// console.log(typeof personString);
// console.log(person);
//
// //comment: single quote valid for javascript but not for JSON


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body',
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);