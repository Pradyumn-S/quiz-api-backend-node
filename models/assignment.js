const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;