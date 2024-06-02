import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const eventSchema = new Schema({
    event_id: {
        type: Object,
        required: true
    },
    event_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: ""
    },
    datetime: {
        type: Date,
        default: ""
    },
    organized_name: {
        type: String,
        default: ""
    },
    no_of_volunteers: {
        type: Number,
        default: 10
    }
}, { timestamps: true });

const Event = model("Event", eventSchema);

export default Event;
