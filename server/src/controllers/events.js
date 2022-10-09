const getEvents = (req, res) => res.json([{ id: 1 }, { id: 2 }])
const getEvent = (req, res) => res.json({ id: req.params.eventId })

module.exports = {
    getEvents,
    getEvent
}