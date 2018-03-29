const Sequelize = require('sequelize')
const db = require('../db')

const ToDos = db.define('todos', {
  description: {
    type: Sequelize.STRING
  }
})


module.exports = ToDos