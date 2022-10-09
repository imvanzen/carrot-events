const httpStatus = require("http-status")

const getEvents = (req, res) => {
    res.status(httpStatus.OK).json([{ id: 1 }, { id: 2 }])
}

const createEvent = (req, res) => {
    res.status(httpStatus.ACCEPTED).json({ id: req.params.eventId })
}

const getEvent = (req, res) => {
    res.status(httpStatus.OK).json({ id: req.params.eventId })
}

const updateEvent = (req, res) => {
    res.status(httpStatus.ACCEPTED).json({ id: req.params.eventId })
}

const deleteEvent = (req, res) => {
    res.status(httpStatus.NO_CONTENT).send()
}

module.exports = {
    getEvents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}