const express = require('express');
const Joi = require('joi');
const router = express.Router()
const validator = require('../../utils/validator')
const eventController = require('../../controllers/events')

const paramsSchema = (
    Joi.object().keys({
        eventId: Joi.string().guid().required(),
    })
)

const bodySchema = (
    Joi.object().keys({
        id: Joi.string().guid(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email().required(),
        event_date: Joi.string().isoDate().required(),
        created_at: Joi.string().allow(null).optional().isoDate(),
        updated_at: Joi.string().allow(null).optional().isoDate(),
        deleted_at: Joi.string().allow(null).optional().isoDate()
    })
)

const createEvent = { body: bodySchema }
const getEvent = { params: paramsSchema }
const updateEvent = { params: paramsSchema, body: bodySchema }
const deleteEvent = { params: paramsSchema }

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