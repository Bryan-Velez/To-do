const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subtaskSchema = new Schema(
    {
        name: {type: String, required: true},
        isCompleted: {type: Boolean, required: true},
        nameOfTask: {type: Schema.Types.ObjectId, ref: 'Task', required: true}
    },
    {timestamps: true}
)
module.exports = subtaskSchema