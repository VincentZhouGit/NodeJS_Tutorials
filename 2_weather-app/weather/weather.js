//52837fdd1114d54c8c72f49a185f1329
const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.forecast.io/forecast/52837fdd1114d54c8c72f49a185f1329/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Forecast.io server.');
        }
        else if(response.statusCode === 404){
            callback('Unable to fetch weather');
        }
        else if(response.statusCode){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
