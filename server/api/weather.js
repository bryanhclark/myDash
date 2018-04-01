const router = require('express').Router()
const request = require('request-promise')

const googleMapsAPIKey = require('../../secrets')

// request(, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err) }
//   const lat = body.results[0].geometry.location.lat
//   const lng = body.results[0].geometry.location.lng
//   request(`https://api.darksky.net/forecast/4f8149d2e0db09f97dc7b72b310bf33b/${lat}, ${lng}`, { json: true })
//     .then()
// })
//res.json(response)

router.get('/', (req, res, next) => {
  let address;
  request({
    method: 'GET',
    uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.location}&key=${googleMapsAPIKey}`,
    json: true
  })
    .then((response) => {

      address = response.results[0].formatted_address
      const lat = response.results[0].geometry.location.lat
      const lng = response.results[0].geometry.location.lng
      return request({
        method: 'GET',
        uri: `https://api.darksky.net/forecast/4f8149d2e0db09f97dc7b72b310bf33b/${lat}, ${lng}`,
        json: true
      })
    })
    .then(response => {
      response.address = address
      res.send(response)
    })
    .catch(next)
})





module.exports = router