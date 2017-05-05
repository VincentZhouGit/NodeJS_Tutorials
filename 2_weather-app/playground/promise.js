//in normal async callback, the logic depends on the argument we are passing in, e.g. errorMessage, results
// in promise, we make it into two cases


var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    }, 2500);


});

//just like passing in two arguments for then(),
//one for success and one for error
somePromise.then((message) => {
    console.log('Success: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
})

/*output
    after 2500 seconds, output: Hey. It worked!
 */


