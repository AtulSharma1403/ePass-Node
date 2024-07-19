const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    emailId: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('SignUpData', SignUpSchema)