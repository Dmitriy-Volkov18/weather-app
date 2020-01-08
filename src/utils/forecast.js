const request = require('request')

const forecast = (latitude, longitude, calback) => {
    const url = 'https://api.darksky.net/forecast/c066ea8a6a7e3b2cf8259f554c2417ae/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) =>{
        if(error){
            calback("Unable to connect to weather service!", undefined)
        }else if(response.body.error){
            calback("Unable to find location!", undefined)
        }
        else{
            calback(undefined, response.body.daily.data[0].summary)
        }
    })
}

module.exports = forecast