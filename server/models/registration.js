const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const registrationSchema = new Schema({
    event_id: {
        type: Object,
        required: true,
        minlength: 3, // Changed from "min" to "minlength"
        unique: true
    },
    event_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.model("Registration", registrationSchema);
