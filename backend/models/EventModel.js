const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    event_id:{
        type:Object,
        require: true
    },

    event_name: {
        type:String,
        require:true
    },
    description: {
        type:String,
        require:true
    },
    location: {
        type:String,
        default:""
    },
    datetime: {
        type:datatime,
        default:""
    },
    organized_name: {
        type:String,
        default:""
    },
    no_of_volenteers: {
        type:Number,
        default:10
    }
    },
{timestamps:true}
);

module.exports = mongoose.model("User",userschema);