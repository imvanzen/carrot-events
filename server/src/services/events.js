const httpStatus = require("http-status")

const getEvents = async () => {
    return new Promise.resolve([{ id: 1 }, { id: 2 }])
}

const createEvent = async (event) => {
    return new Promise.resolve(event)
}

const getEventById = async (id) => {
    return new Promise.resolve({ id })
}

const updateEventById = async (id, event) => {
    return new Promise.resolve({ id, ...event })
}

const deleteEventById = async (id) => {
    return new Promise.resolve(null);
}

module.exports = {
    getEvents,
    createEvent,
    getEventById,
    updateEventById,
    deleteEventById
}