const { SubTask } = require('../models')
const subTaskSchema = require('../models/subtask')

const getSubTasks = async (req, res)=> {
    const subTasks = await SubTask.find({})
    res.json(subTasks)
}

const getSubTaskById = async (req,res) => {
    try{
    const { id } = req.params
    const subTask = await SubTask.findById(id)
    if(!subTask) throw Error('subTask not found')
    res.json(subTask)
    }catch (e){
        console.log(e)
        res.send('subTask not found')
    }
}

module.exports = {
    getSubTasks,
    getSubTaskById
}