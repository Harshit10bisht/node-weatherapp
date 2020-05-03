const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ latitude +"&lon="+ longitude +"&units=metric&appid=0d0e661d02aeeb75c6e0e3a3750cac70"

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect server', undefined)
        }
        else if(body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, 
                "\nLocation is "+body.name+
                "\nWeather is "+body.weather[0].main+
                "\nDescription "+body.weather[0].description)
        }
    })
}

module.exports = forecast