const fs = require('fs');

//refactoring
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};




var addNote = (title, body) => {
    var notes =fetchNotes();
    var note = {
        title,
        body
    };


    //filter is an array function that takes a callback
    //use arrow notation for the callback function here
    //duplicateNotes is empty initially
    //  if true, store item in the array
    //  if false, don't do so
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;

    });

    // //optional expression for above. could do this if only one expression
    // var duplicateNotes = notes.filter((note) =>  note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }


};


var getAll = () => {
    return fetchNotes();

};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=> {
        return note.title === title;
    });

    return filteredNotes[0];
};

var removeNote = (title) => {
    //fectch notes
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    console.log(filteredNotes);
    //save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};



var logNotes = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

//*****another way to export*****
// module.exports = {
//     addNote: addNote
// };

//shortcut for above(when key and value have the same name)
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNotes

}