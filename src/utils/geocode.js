const request = require('request')


const geocode = (adress , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZGFrc2gwNSIsImEiOiJja283aHVjaGMwbDB4MnVwd2VpeTNvZTdxIn0.4llXrFGDL1TywxH1wCVS3w&limit=1'

    request ({ url , json: true }, (error , { body } ) =>{
        if(error){
            callback('Unable to connect to location services !' , undefined) //in this we put undefined but if we wont have it will be same undifined 
        } else if(body.features.length === 0){
            callback('Unable to find the location. Try again. ' , undefined)
        } else {
            callback(undefined , {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports = geocode


// const request = require('request')


// const geocode = (adress , callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZGFrc2gwNSIsImEiOiJja283aHVjaGMwbDB4MnVwd2VpeTNvZTdxIn0.4llXrFGDL1TywxH1wCVS3w&limit=1'

//     request ({url: url , json: true }, (error , response) =>{
//         if(error){
//             callback('Unable to connect to location services !' , undefined) //in this we put undefined but if we wont have it will be same undifined 
//         } else if(response.body.features.length === 0){
//             callback('Unable to find the location. Try again. ' , undefined)
//         } else {
//             callback(undefined , {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })

// }

// module.exports = geocode