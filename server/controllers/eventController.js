const  Event = require('../models/EventModel.js');
const Registration = require ('../models/RegistrationModel.js');

// Create Event
export const createEvent = async (req, res) => {
    const { event_Id, title, description, datetime, location, organizer_id } = req.body;

    try {
        const event = new Event({ event_Id, title, description, datetime, location, organizer_id });
        await event.save();
        res.status(201).json({ id: event._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get specific event by ID
export const getSpecificEvent = async (req, res) => {
    const eventId = req.params.id;
    
    try {
        const event = await Event.findById(eventId);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete event
export const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
        const event = await Event.findOneAndDelete({ _id: eventId, organizer_id: req.user.id });

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.status(200).json({ message: "Event Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
