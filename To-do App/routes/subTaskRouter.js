const Router = require('express').Router()
const subtaskController = require('../controllers/subtaskController.js')

Router.get('/', subtaskController.getSubtasks)

Router.get('/:id', subtaskController.getSubtaskById)

Router.post('/', subtaskController.createSubtask)

Router.put('/', subtaskController.updateSubtask)

Router.delete('/:id', subtaskController.deleteSubtask)


module.exports = Router