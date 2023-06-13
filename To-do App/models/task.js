const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
        name: {type: String, required: true},
        dueDate: {type: String, require: true},
        isCompleted: {type: Boolean, require: true},
        nameOfUser: {type: Schema.Types.ObjectId, ref: 'User', require: true}
    },
    {timestamps: true}
)
module.exports = taskSchema