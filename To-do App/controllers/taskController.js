const { Task } = require('../models')
const taskSchema = require('../models/task')

const getTasks = async (req, res)=> {
    const tasks = await Task.find({})
    res.json(tasks)
}

const getTaskById = async (req,res) => {
    try{
    const { id } = req.params
    const task = await Task.findById(id)
    if(!task) throw Error('task not found')
    res.json(task)
    }catch (e){
        console.log(e)
        res.send('task not found')
    }
}

const createTask= async (req, res) => {
    try {
        const task = await new Task(req.query)
        await task.save()
        if(!task) throw Error('Task not created')
        return res.status(201).json(model)
    } catch (e) {
        console.log(e)
        res.status(500).send("Task not created")
    }
}

module.exports = {
    getTasks,
    getTaskById
}