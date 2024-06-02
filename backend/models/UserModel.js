import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const userSchema = new Schema({
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
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

// Hash password before saving to database
userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);

export default User;
