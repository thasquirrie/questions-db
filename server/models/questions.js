var mongoose = require('mongoose')

var Question = mongoose.model('Question', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

module.exports = {
    Question
}