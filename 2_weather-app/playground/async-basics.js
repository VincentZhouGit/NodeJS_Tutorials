console.log('Starting app');

//this registers a callback that will be fired in 2 seconds
//during this time, node could do other things it wants
setTimeout(() =>{
    console.log('Inside of callback');
}, 2000);


setTimeout(() => {
    console.log('Second setTimeout');

}, 0)

console.log('Finishing up');


/*
output:
 Starting app
 Finishing up
 Second setTimeout
 Inside of callback

core question: why 'second setTimeout' comes after 'finishig up'?
 */

