const httpStatus = require("http-status")

const getEvents = async () => {
    return Promise.resolve([{ id: 1 }, { id: 2 }])
}

const createEvent = async (event) => {
    return Promise.resolve(event)
}

const getEventById = async (id) => {
    return Promise.resolve({ id })
}

const updateEventById = async (id, event) => {
    return Promise.resolve({ id, ...event })
}

const deleteEventById = async (id) => {
    return Promise.resolve(null);
}

module.exports = {
    getEvents,
    createEvent,
    getEventById,
    updateEventById,
    deleteEventById
}