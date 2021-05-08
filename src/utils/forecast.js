const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e0350647896ee0c3cae4a98c7d0b2f65&query=' + latitude + ',' + longitude + '&units=m'

    request({ url , json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out.")
        }
    })

}


module.exports = forecast






// const url = 'http://api.weatherstack.com/current?access_key=e0350647896ee0c3cae4a98c7d0b2f65&query=37.826,-122.4233'
// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather services !')
//     } else if (response.body.error) {
//         console.log('Unable to find the location !')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degeree Out. But it feels like ' + response.body.current.feelslike + ' degree out')
//     }
    
// })
