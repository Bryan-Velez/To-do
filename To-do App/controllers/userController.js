const { User } = require('../models')
const userSchema = require('../models/user')

const getUsers = async (req, res)=> {
    const users = await User.find({})
    res.json(users)
}

const getUserById = async (req,res) => {
    try{
    const { id } = req.params
    const user = await User.findById(id)
    if(!user) throw Error('User not found')
    res.json(user)
    }catch (e){
        console.log(e)
        res.send('User not found')
    }
}

const createUser = async (req, res) => {
    console.log(req.query)

    try {
        const user = await new User(req.query)
        await user.save()
        if(!user) throw Error('User not created')
        return res.status(201).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).send('User not created')
    }
}



const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if(updatedUser) { 
            return res.status(200).json(updatedUser) 
        } 
        throw new Error('User not updated')
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
}



const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user) throw Error('User not deleted')
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).send('User not deleted')
    }
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}