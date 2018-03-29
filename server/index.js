const path = require('path')
const morgan = require('morgan')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/db')
const PORT = process.env.PORT || 8080

module.export = app
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', require('./api'))

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, ('../public/')))
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server error')
})

db.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`)
    })
  })