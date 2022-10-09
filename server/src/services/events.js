const eventsRepository = require('../repositories/events.js')

const getEvents = async () => {
    const events = await eventsRepository.findAll()
    return events
}

const createEvent = async (event) => {
    const events = await eventsRepository.create(event)
    return events
}

const getEventById = async (id) => {
    const event = await eventsRepository.findOne(id)
    if (!event) {
        throw new Error('Event not found')
    }
    return event
}

const updateEventById = async (id, newEvent) => {
    const event = await eventsRepository.findOne(id)
    if (!event) {
        throw new Error('Event not found')
    }
    const updatedEvent = await eventsRepository.update(id, newEvent)
    return updatedEvent
}

const deleteEventById = async (id) => {
    const event = await eventsRepository.findOne(id)
    if (!event) {
        throw new Error('Event not found')
    }
    const result = await eventsRepository.remove(id)
    return result
}

module.exports = {
    getEvents,
    createEvent,
    getEventById,
    updateEventById,
    deleteEventById
}