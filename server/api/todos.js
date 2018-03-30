const router = require('express').Router()
const { ToDos } = require('../db/models')

router.get('/', (req, res, next) => {
  ToDos.findAll()
    .then(todos => {
      res.json(todos)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {

  ToDos.create({
    data: req.body.todo
  })
    .then(todo => res.json(todo))
    .catch(next)
})


module.exports = router