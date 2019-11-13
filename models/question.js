const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    statement: {
        type: String,
        required: true,
        trim: true
    },
    options: [{
        value: {
            type: String,
            require: true,
            trim: true
        },
        correct: {
            type: Boolean,
            require: true,
        }
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;