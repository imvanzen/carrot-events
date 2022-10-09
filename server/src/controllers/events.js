const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const eventsService = require('../services/events')

const getEvents = catchAsync(async (req, res) => {
    const events = await eventsService.getEvents()
    res.status(httpStatus.OK).json(events)
})

const createEvent = catchAsync(async (req, res) => {
    const event = await eventsService.createEvent(req.body)
    res.status(httpStatus.ACCEPTED).json(event)
})

const getEvent = catchAsync(async (req, res) => {
    const event = await eventsService.getEventById(req.params.eventId)
    res.status(httpStatus.OK).json(event)
})

const updateEvent = catchAsync(async (req, res) => {
    const event = await eventsService.updateEventById(req.params.eventId, req.body)
    res.status(httpStatus.ACCEPTED).json(event)
})

const deleteEvent = catchAsync(async (req, res) => {
    await eventsService.deleteEventById(req.params.eventId)
    res.status(httpStatus.NO_CONTENT).send()
})

module.exports = {
    getEvents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}