import mongoose from 'mongoose';

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
    location: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Registration = model('Registration', registrationSchema);

export default Registration;
