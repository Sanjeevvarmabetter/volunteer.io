const  express = require('express');
const Event = require('../models/event.js');

const router = express.Router();

// Create an Event
router.post('/', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

// Read Events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Read a Single Event
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }
        res.send(event);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Update an Event
router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }
        res.send(event);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Delete an Event
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }
        res.send({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router
