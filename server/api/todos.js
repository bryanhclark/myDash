const router = require('express').Router()
const { Todo } = require('../db/models')

router.get('/', (req, res, next) => {
  Todo.findAll()
    .then(todos => {
      res.json(todo)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Todo.create({
    data: req.body.description
  })
    .then(todo => res.json(todo))
    .catch(next)
})


module.exports = router