const express = require('express');
const { createEvent,getallevents,getspecificEvent,deleteEvent } = require('../controllers/eventController');


const router = express.Router();

// all routes

router.post('/events',createEvent); //add protction
router.get('/events',getallevents);
router.get('/events/:id',getspecificEvent);

// write update also

router.delete('/events/:id',deleteEvent); //add protection


module.exports = router;
