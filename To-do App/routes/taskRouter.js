const Router = require('express').Router()
const taskController = require('../controllers/taskController.js')

Router.get('/', taskController.getTasks)

Router.get('/:id', taskController.getTaskById)

module.exports = Router