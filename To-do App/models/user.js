const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        name: {type: String, required: true},
        username: {type: String, require: true},
        password: {type: String, require: true}
    },
    {timestamps: true}
)
module.exports = userSchema