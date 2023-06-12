const { Schema } = require('mongoose')

const task1Schema = new Schema(
    {
        name: {type: String, required: true},
        date: {type: String, require: true},
        time: {type: String, require: true}
    },
    {timestamps: true}
)
module.exports = task1Schema