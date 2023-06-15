const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        name: {type: String, required: true},
        dueDate: {type: String, required: false},
        isCompleted: {type: Boolean, required: false},
        nameOfUser: {type: Schema.Types.ObjectId, ref: 'User', required: false}
    },
    {timestamps: true}
)
module.exports = taskSchema