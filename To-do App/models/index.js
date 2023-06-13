const mongoose = require('mongoose')
const userSchema = require('./user')
const taskSchema = require('./task')
const subTaskSchema = require('./subtask')

const User = mongoose.model('User', userSchema)
const Task = mongoose.model('Task', taskSchema)
const SubTask = mongoose.model('SubTask', subTaskSchema)

module.exports = {
    User,
    Task,
    SubTask
  }