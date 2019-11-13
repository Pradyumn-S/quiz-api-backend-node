const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        toLowerCase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    assignments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;