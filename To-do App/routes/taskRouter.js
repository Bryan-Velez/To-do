const Router = require('express').Router()
const taskController = require('../controllers/taskController.js')

Router.get('/', taskController.getTasks)

Router.get('/:id', taskController.getTaskById)

Router.post('/', taskController.createTask)

Router.put('/:id', taskController.updateTask)

Router.delete('/:id', taskController.deleteTask)


module.exports = Router