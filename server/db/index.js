const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432:myDash', { logging: false })



module.exports = db