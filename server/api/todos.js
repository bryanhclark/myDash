const router = require('express').Router()
const { ToDos } = require('../db/models')

router.get('/', (req, res, next) => {
  ToDos.findAll({
    order: [['id', 'ASC']]
  })
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

router.put('/', (req, res, next) => {
  ToDos.update(
    { completed: req.body.data.todo.completed },
    {
      where: { id: req.body.data.todo.id },
      returning: true
    })
    .spread((numUpdates, updatedStudent) => res.json(updatedStudent[0]))
    .catch(next)
})

router.delete('/', (req, res, next) => {
  ToDos.destroy({
    where: {
      id: req.query.todoId
    }
  })
    .then(didDestroy => res.json(didDestroy))
    .catch(next)
})


module.exports = router