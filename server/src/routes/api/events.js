const express = require('express')
const router = express.Router()
const eventController = require('../../controllers/events')

router
    .route('/')
    .get(eventController.getEvents)

router
    .route('/:eventId')
    .get(eventController.getEvent)

module.exports = router