// id 
// name
// password
// email
// role

// https://github.com/dejwid/ecommerce-front 
// https://github.com/dejwid/ecommerce-admin/blob/master/models/Order.js 

// Getting Started with MongoDB & Mongoose : https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    username:{
        type:String,
        required: true
    },

    password: {
        type:String,
        required: true
    },

    email: {
        type:String,
        required: true
    },

    role: {
        type:String,
        required: true,
        enum:['volunteer','organizer']
    },
});

module.exports = mongoose.model('user',UserSchema);



