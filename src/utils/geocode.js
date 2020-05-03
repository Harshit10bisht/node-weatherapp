const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1IjoiaGFyc2hpdGJpc2h0MTIxMCIsImEiOiJjazludG0wMDIwMjR6M2ZuNnNrbjM1bGgxIn0.F8HUGap6tu32WkTDBjRvGw"

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect server!', undefined)
        }
        else if(body.features.length === 0) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode