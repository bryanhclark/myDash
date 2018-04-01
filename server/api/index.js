const router = require('express').Router()

router.use('/todos', require('./todos'))
router.use('/weather', require('./weather'))

module.exports = router