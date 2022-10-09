const express = require('express')
const router = express.Router()
const eventController = require('../../controllers/events')

router
    .route('/')
    .get(eventController.getEvents)
    .post(eventController.createEvent)

router
    .route('/:eventId')
    .get(eventController.getEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent)

module.exports = router