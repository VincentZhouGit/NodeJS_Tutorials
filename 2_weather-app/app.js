const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


//command e.g. node app.js --help or node app.js --h
const argv = yargs
    .options({
       a:{
           demand: true,
           alias: 'address',
           describe: 'Address to fetch weather for',
           string: true
       }
    })
    .help()
    .alias('help', 'h')
    .argv

//console.log(argv);
geocode.geocodeAddress(argv.address, (errorMessage,results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        //console.log(JSON.stringify(results,undefined,2));
        console.log(results.address);

        weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults ) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }


        });
    }




});


