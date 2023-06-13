const mongoose = require('mongoose')
const userSchema = require('./user')
const taskSchema = require('./task')
const subtaskSchema = require('./subtask')

const User = mongoose.model('User', userSchema)
const Task = mongoose.model('Task', taskSchema)
const Subtask = mongoose.model('Subtask', subtaskSchema)

module.exports = {
    User,
    Task,
    Subtask
  }