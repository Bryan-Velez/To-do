const Router = require('express').Router()
const subTaskController = require('../controllers/subTaskController.js')

Router.get('/', subTaskController.getSubTasks)

Router.get('/:id', subTaskController.getSubTaskById)

module.exports = Router