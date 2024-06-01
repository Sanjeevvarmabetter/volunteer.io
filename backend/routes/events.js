import express from 'express';
import { createEvent, getAllEvents, getSpecificEvent, deleteEvent } from '../controllers/eventController.js';

const router = express.Router();

// Create Event
router.post('/events', createEvent);

// Get all events
router.get('/events', getAllEvents);

// Get specific event by ID
router.get('/events/:id', getSpecificEvent);

// Delete event
router.delete('/events/:id', deleteEvent);

export default router;
