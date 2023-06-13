const express = require('express')
const Router = express.Router()

const UserRouter = require('./userRouter')
const TaskRouter = require('./taskRouter')
const SubTaskRouter = require('./subTaskRouter')

Router.use('/users', UserRouter)
Router.use('/tasks', TaskRouter)
Router.use('/subtasks', SubTaskRouter)

module.exports = Router
