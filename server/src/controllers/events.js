const httpStatus = require("http-status")
const eventsService = require('../services/events')

const getEvents = async (req, res) => {
    const events = await eventsService.getEvents()
    res.status(httpStatus.OK).json(events)
}

const createEvent = async (req, res) => {
    const event = await eventsService.createEvent(req.body)
    res.status(httpStatus.ACCEPTED).json(event)
}

const getEvent = async (req, res) => {
    const event = await eventsService.getEventById(req.params.eventId)
    res.status(httpStatus.OK).json(event)
}

const updateEvent = async (req, res) => {
    const event = await eventsService.getEventById(req.params.eventId, req.body)
    res.status(httpStatus.ACCEPTED).json(event)
}

const deleteEvent = async (req, res) => {
    await eventsService.getEventById(req.params.eventId, req.body)
    res.status(httpStatus.NO_CONTENT).send()
}

module.exports = {
    getEvents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}