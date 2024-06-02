const  express = require('express');
const  Registration = require('../models/registration.js');

const router = express.Router();

// Create a Registration
router.post('/', async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).send(registration);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

// Read Registrations
router.get('/', async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.send(registrations);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Read a Single Registration
router.get('/:id', async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).send({ message: 'Registration not found' });
        }
        res.send(registration);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Update a Registration
router.put('/:id', async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registration) {
            return res.status(404).send({ message: 'Registration not found' });
        }
        res.send(registration);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// Delete a Registration
router.delete('/:id', async (req, res) => {
    try {
        const registration = await Registration.findByIdAndDelete(req.params.id);
        if (!registration) {
            return res.status(404).send({ message: 'Registration not found' });
        }
        res.send({ message: 'Registration deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router
