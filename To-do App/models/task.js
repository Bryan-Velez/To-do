const { Schema } = require('mongoose')

const taskSchema = new Schema(
    {
        name: {type: String, required: true},
        dueDate: {type: String, require: true},
        isCompleted: {type: Boolean, require: true},
        nameOfUser: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {timestamps: true}
)
module.exports = taskSchema