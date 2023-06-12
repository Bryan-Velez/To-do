const { Schema } = require('mongoose')

const subTaskSchema = new Schema(
    {
        name: {type: String, required: true},
        isCompleted: {type: Boolean, require: true},
        time: {type: String, require: true}
    },
    {timestamps: true}
)
module.exports = subTaskSchema