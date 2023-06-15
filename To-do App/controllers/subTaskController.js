const { Subtask } = require('../models')
const subtaskSchema = require('../models/subtask')

const getSubtasks = async (req, res)=> {
    const subtasks = await Subtask.find({})
    res.json(subtasks)
}

const getSubtaskById = async (req,res) => {
    try{
    const { id } = req.params
    const subtask = await Subtask.findById(id)
    if(!subtask) throw Error('Subtask not found')
    res.json(subtask)
    }catch (e){
        console.log(e)
        res.send('Subtask not found')
    }
}

const getSubtaskByTaskID = async (req,res) => {
    try{
    const { id } = req.params
    const subtask = await Subtask.find({nameOfTask: id})
    if(!subtask) throw Error('Subtask not found')
    res.json(subtask)
    }catch (e){
        console.log(e)
        res.send('Subtask not found')
    }
}

const createSubtask= async (req, res) => {
    try {
        const subtask = await new Subtask(req.body)
        await subtask.save()
        if(!subtask) throw Error('Subtask not created')
        return res.status(201).json(subtask)
    } catch (e) {
        console.log(e)
        res.status(500).send("Subtask not created")
    }
}

const updateSubtask = async (req, res) => {
    try {
        const { id } = req.params
        const updatedSubtask = await Subtask.findByIdAndUpdate(id, req.body, { new: true })
        if(updatedSubtask) { 
            return res.status(200).json(updatedSubtask) 
        } 
        throw new Error('Subtask not updated')
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
}

const deleteSubtask = async (req, res) => {
    try { 
        const { id } = req.params
        const subtask = await Subtask.findByIdAndDelete(id)
        if(!subtask) throw Error('Subtask not deleted')
        res.status(200).json(subtask)
    } catch (e) {
        console.log(e)
        res.status(500).send('Subtask not deleted')
    }
}

module.exports = {
    getSubtasks,
    getSubtaskById,
    getSubtaskByTaskID,
    createSubtask,
    updateSubtask,
    deleteSubtask
}