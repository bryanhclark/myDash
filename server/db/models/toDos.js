const Sequelize = require('sequelize')
const db = require('../db')

const ToDos = db.define('todos', {
  data: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})


module.exports = ToDos