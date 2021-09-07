const mongoose = require('mongoose')
const PersonSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    CreatedDate: {
        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model('persons', PersonSchema);