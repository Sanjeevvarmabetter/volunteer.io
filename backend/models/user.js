import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['volunteer', 'organizer']
    },
});

const User = model('User', UserSchema);

export default User;
