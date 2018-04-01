const router = require('express').Router()
const request = require('request')




router.get('/', (req, res, next) => {
  request('https://api.darksky.net/forecast/4f8149d2e0db09f97dc7b72b310bf33b/41.2960,-72.3845', { json: true }, (err, res, body) => {
    if (err) { return console.log(err) }
    console.log('res', body.minutely.data[0])
  })

})





module.exports = router