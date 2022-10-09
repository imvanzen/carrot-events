const express = require('express');
const Joi = require('joi');
const router = express.Router()
const validator = require('../../utils/validator')
const eventController = require('../../controllers/events')

const paramsSchema = (
    Joi.object().keys({
        eventId: Joi.required().guid(),
    })
)

const bodySchema = (
    Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required().email(),
        event_date: Joi.string().required()
    })
)

const createEvent = { body: bodySchema }
const getEvent = { params: paramsSchema }
const updateEvent = { params: bodySchema, body: bodySchema }
const deleteEvent = { params: bodySchema }

router
    .route('/')
    .get(eventController.getEvents)
    .post(validator(createEvent), eventController.createEvent)

router
    .route('/:eventId')
    .get(validator(getEvent), eventController.getEvent)
    .put(validator(updateEvent), eventController.updateEvent)
    .delete(validator(deleteEvent), eventController.deleteEvent)

module.exports = router