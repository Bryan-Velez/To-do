const Router = require('express').Router()
const userController = require('../controllers/userController.js')

Router.get('/', userController.getUsers)

Router.get('/:id', userController.getUserById)

Router.post('/', userController.createUser)

Router.put('/', userController.updateUser)

Router.delete('/:id', userController.deleteUser)


module.exports = Router

