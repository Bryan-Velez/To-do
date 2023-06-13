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
        const createdTask = await new Task(req.query)
        await createdTask.save()
        if(!createdTask) throw Error('Task not created')
        return res.status(201).json(createdTask)
    } catch (e) {
        console.log(e)
        res.status(500).send("Task not created")
    }
}

const updateTask = async (req, res) => {
    try {
        const { id, whatToUpdate, update } = req.query
        const updatedTask = await Task.findByIdAndUpdate(  id, { [whatToUpdate]: update }, { new: true } )
        if(!updatedTask) throw Error('Task not updated')
        res.status(201).json(updatedTask)
    } catch (e) {
        console.log(e)
        res.status(500).send('Task not updated')
    }
}

const deleteTask = async (req, res) => {
    try { 
        const { id } = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        if(!deletedTask) throw Error('Task not deleted')
        res.status(200).json(deletedTask)
    } catch (e) {
        console.log(e)
        res.status(500).send('Taks not deleted')
    }
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}