const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        name: {type: String, required: true},
        dueDate: {type: String, required: true},
        isCompleted: {type: Boolean, required: true},
        nameOfUser: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    },
    {timestamps: true}
)
module.exports = taskSchema