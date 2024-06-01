const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    event_id: {
        type: Number,
        required: true,
        min: 3,
        unique: true
    },
    event_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
