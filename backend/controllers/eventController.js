const Event = require('../models/EventModel');
const Registration = require('../models/RegistrationModel');



//for creating events
 // /api/createEvent


 exports.createEvent = async (req,res) => {
    const { event_Id,title,description,datetime,location,organizer_id } = req.body;

    try {
    const event = new Event({event_Id,title,description,datetime,location,organizer_id});
    await event.save();
    res.status(201).json({id:event._id});

    } catch(error)  {
        res.status(500).json({error: error.message});
    }
};


// for getting all events

exports.getallevents = async (req,res) => {


    try {
        const events = await Event.find();
        res.status(200).json(events);

    }
         catch(error)  {
        res.status(500).json({error: error.message});
    }
};




 
// get specific event we need id

exports.getspecificEvent  = async (req,res) => {
    const eventId = req.params.id;
    
    try {
        const e = await Event.findBy.Id(eventId);
        res.status(200).json(e);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}






// update event




//delete event


exports.deleteEvent = async (req,res) => {
    const eventId = req.params.id;

    try {
        const event = await Event.findOneAndDelete({_id:eventId,organizer_id:req.user.id});

        if(!event) {
            return res.status(404).json({error:"Event not found"});
        }

        res.status(200).json({message: "Event Deleted"});
    } catch(error) {
        res.status(500).json({error:error.message});
    }
}
