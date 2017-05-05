var square = (x) => {
  var result = x * x;
  return result;
};

//optional: if there is only one expression
//var square = (x) => x*x;


var user = {
    name: 'Vincent',

    //Pronle,: not working because
    //      (1)arrow function does not bind "this"
    //      (2)also. it doesn't worl for arguments array
    // sayHi: () => {
    //     console.log(arguments);
    //     console.log(`Hi. I'm ${this.name}`);
    // }

    //solutions:(non-arrow function)
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`);
    }

};

user.sayHiAlt(1,2,3);
