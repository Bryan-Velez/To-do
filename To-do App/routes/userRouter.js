const Router = require('express').Router()
const userController = require('../controllers/userController.js')

Router.get('/', userController.getUsers)

Router.get('/:id', userController.getUserById)

module.exports = Router